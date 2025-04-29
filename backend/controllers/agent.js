const getTenantDB = require("../config"); // this should export a function
const util = require("util");

// GET all records from agentmaster
exports.getMaster = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const result = await query("SELECT * FROM agentmaster");
    res.json(result);
  } catch (err) {
    console.error("Error fetching agentmaster:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    con.end(); // Close connection
  }
};

// INSERT a new record into agentmaster
exports.addMaster = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const data = req.body;
    await query("INSERT INTO agentmaster SET ?", data);
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res
      .status(500)
      .json({ error: "Error inserting data into agentmaster table" });
  } finally {
    con.end(); // Close connection
  }
};

// PAGINATED GET from agentmaster
exports.agents = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const countResult = await query(
      "SELECT COUNT(*) as totalCount FROM agentmaster"
    );
    const totalCount = countResult[0].totalCount;

    const rows = await query("SELECT * FROM agentmaster LIMIT ? OFFSET ?", [
      limit,
      offset,
    ]);
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      totalRecords: totalCount,
      totalPages,
      currentPage: page,
      agents: rows,
    });
  } catch (err) {
    console.error("Error fetching paginated agents:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    con.end(); // Close connection
  }
};

// search from mobile api
exports.searchMobile = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  // use query parameters (e.g., /searchMobile?AGENTNAME=xyz&ACMOBILENO=123)
  const filters = req.query;
  console.log("filters", filters);
  try {
    let sql = "SELECT * FROM agentmaster WHERE 1=1";
    const params = [];

    // Dynamically build query based on available filters
    if (filters.AGENTNAME) {
      sql += " AND AGENTNAME LIKE ?";
      params.push(`%${filters.AGENTNAME}%`);
    }

    if (filters.AFIRMNAME) {
      sql += " AND AFIRMNAME LIKE ?";
      params.push(`%${filters.AFIRMNAME}%`);
    }

    if (filters.ACMOBILENO) {
      sql += " AND ACMOBILENO LIKE ?";
      params.push(`%${filters.ACMOBILENO}%`);
    }

    if (filters.APCITY) {
      sql += " AND APCITY LIKE ?";
      params.push(`%${filters.APCITY}%`);
    }

    if (filters.APSTATE) {
      sql += " AND APSTATE LIKE ?";
      params.push(`%${filters.APSTATE}%`);
    }

    // if (filters.STATUS) {
    //   sql += " AND STATUS = ?";
    //   params.push(filters.STATUS);
    // }

    const result = await query(sql, params);

    res.json(result);
  } catch (err) {
    console.error("Error searching agent:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    con.end();
  }
};

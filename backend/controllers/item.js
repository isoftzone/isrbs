const getTenantDB = require("../config"); // this should export a function
const util = require("util");

// GET all records from itemmaster
exports.getItem = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const result = await query("SELECT * FROM itemmaster");
    res.json(result);
  } catch (err) {
    console.error("Error fetching itemmaster:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    con.end(); // Close connection
  }
};

// INSERT a new record into itemmaster
exports.addItem = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const data = req.body;
    await query("INSERT INTO itemmaster SET ?", data);
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res
      .status(500)
      .json({ error: "Error inserting data into itemmaster table" });
  } finally {
    con.end(); // Close connection
  }
};

// PAGINATED GET from itemmaster
exports.item = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const countResult = await query(
      "SELECT COUNT(*) as totalCount FROM itemmaster"
    );
    const totalCount = countResult[0].totalCount;

    const rows = await query("SELECT * FROM itemmaster LIMIT ? OFFSET ?", [
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



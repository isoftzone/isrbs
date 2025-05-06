const { console } = require("inspector");
const getTenantDB = require("../config"); // this should export a function
const util = require("util");

// GET all records from agentmaster
exports.getMaster = async (req, res) => {
  const schemaName = req.schema;
  const companyid = req.schema;

  const con = getTenantDB(schemaName, companyid);
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
// exports.searchMobile = async (req, res) => {
//   const schemaName = req.schema;
//   const con = getTenantDB(schemaName);
//   const query = util.promisify(con.query).bind(con);

//   // use query parameters (e.g., /searchMobile?AGENTNAME=xyz&ACMOBILENO=123)
//   const filters = req.query;
//   console.log("filters", filters);
//   try {
//     let sql = "SELECT * FROM agentmaster WHERE 1=1";
//     const params = [];

//     // Dynamically build query based on available filters
//     if (filters.AGENTNAME) {
//       sql += " AND AGENTNAME LIKE ?";
//       params.push(`%${filters.AGENTNAME}%`);
//     }

//     if (filters.AFIRMNAME) {
//       sql += " AND AFIRMNAME LIKE ?";
//       params.push(`%${filters.AFIRMNAME}%`);
//     }

//     if (filters.ACMOBILENO) {
//       sql += " AND ACMOBILENO LIKE ?";
//       params.push(`%${filters.ACMOBILENO}%`);
//     }

//     if (filters.APCITY) {
//       sql += " AND APCITY LIKE ?";
//       params.push(`%${filters.APCITY}%`);
//     }

//     if (filters.APSTATE) {
//       sql += " AND APSTATE LIKE ?";
//       params.push(`%${filters.APSTATE}%`);
//     }

//     // if (filters.STATUS) {
//     //   sql += " AND STATUS = ?";
//     //   params.push(filters.STATUS);
//     // }

//     const result = await query(sql, params);

//     res.json(result);
//   } catch (err) {
//     console.error("Error searching agent:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   } finally {
//     con.end();
//   }
// };

// exports.searchMobile = async (req, res) => {
//   const schemaName = req.schema;
//   const con = getTenantDB(schemaName);
//   const query = util.promisify(con.query).bind(con);

//   const tableName = req.query.tableName;
//   const filters = req.query.formData;
//   console.log("filters", filters);

//   try {
//     let sql = `SELECT * FROM ${tableName} WHERE 1=1`;
//     const params = [];

//     // Dynamically append conditions for all filters
//     Object.entries(filters).forEach(([key, value]) => {
//       if (value) {
//         sql += ` AND \`${key}\` LIKE ?`;
//         params.push(`%${value}%`);
//       }
//     });

//     const result = await query(sql, params);
//     res.json(result);
//   } catch (err) {
//     console.error("Error searching agent:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   } finally {
//     con.end();
//   }
// };

exports.reportSearch = async (req, res) => {
  const schemaName = req.schema; // Set by middleware
  const companyId = req.companyId; // Adjust according to where you send it
  // const FinYear = req.query.FinYear;
 
  console.log("companyId", companyId);

  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);
  const { pageName } = req.query;
  const filters = req.query.formData ? JSON.parse(req.query.formData) : {};
  let baseQuery = "";
  const params = [];
  switch (pageName) {
    case "customer":
      baseQuery = "SELECT * FROM customermaster WHERE 1=1";
      break;
    case "item":
      baseQuery = "SELECT * FROM itemmaster WHERE 1=1";
      break;
    case "agent":
      baseQuery = "SELECT * FROM agentmaster WHERE 1=1";
      break;
    case "employee":
      baseQuery = "SELECT * FROM empmaster WHERE 1=1";
      break;
      case "dealer":
      baseQuery = "SELECT * FROM dealermaster WHERE 1=1";
      break;
    case "transport":
      baseQuery = "SELECT * FROM transportmaster WHERE 1=1";
      break;
     default:
      return res.status(400).json({ error: "Unknown page name" });
  }
  // Build WHERE conditions based on filters
  if (filters && typeof filters === "object" && !Array.isArray(filters)) {
    for (const [key, value] of Object.entries(filters)) {
      if (value === null || value === "") continue;
      if (key.toLowerCase().includes("from")) {
        const column = key.replace(/From/i, "");
        baseQuery += ` AND \`${column}\` >= ?`;
        params.push(value);
      } else if (key.toLowerCase().includes("to")) {
        const column = key.replace(/To/i, "");
        baseQuery += ` AND \`${column}\` <= ?`;
        params.push(value);
      } else if (
        key.toLowerCase().includes("name") ||
        key.toLowerCase().includes("item")
      ) {
        baseQuery += ` AND \`${key}\` LIKE ?`;
        params.push(`%${value}%`);
      } else {
        baseQuery += ` AND \`${key}\` = ?`;
        params.push(value);
      }
    }
  }
  try {
    const result = await query(baseQuery, params);
    res.json(result);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "Query execution failed" });
  } finally {
    con.end();
  }
};

exports.getfilterData = async (req, res) => {
  const schemaName = req.schema; // Set by middleware
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);
  const { pageName, column } = req.query;
  console.log("column",column)
  if (!pageName || !column) {
    return res.status(400).json({ error: "Missing pageName or column" });
  }
  // Define allowed tables and their corresponding columns
  const allowedTables = {
    customer: {
      table: 'customermaster',
      columns: [column] // Replace with actual columns
    },
    item: {
      table: 'itemmaster',
      columns: [column] // Replace with actual columns
    },
    agent: {
      table: 'agentmaster',
      columns: [column] // Replace with actual columns
    },
    employee: {
      table: 'empmaster',
      columns: [column] // Replace with actual columns
    },
    transport: {
      table: 'transportmaster',
      columns: [column] // Replace with actual columns
    },
    dealer: {
      table: 'dealermaster',
      columns: [column] // Replace with actual columns
    },
    dealer: {
      table: 'itemmaster',
      columns: [column] // Replace with actual columns
    }
  };
  const pageConfig = allowedTables[pageName.toLowerCase()];
  if (!pageConfig) {
    return res.status(400).json({ error: "Unknown page name" });
  }
  const { table, columns } = pageConfig;
  if (!columns.includes(column)) {
    return res.status(400).json({ error: "Invalid column name for the specified page" });
  }
  try {
    const sql = `SELECT DISTINCT \`${column}\` FROM \`${table}\` WHERE \`${column}\` IS NOT NULL`;
    const results = await query(sql);
    const options = results.map(row => row[column]);
    res.json({ options });
  } catch (err) {
    console.error("Error fetching dropdown options:", err);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    con.end();
  }
};











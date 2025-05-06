
const getTenantDB = require("../config"); // this should export a function
const util = require("util");

exports.getFilter = async (req, res) => {
    const schemaName = req.schema;
    const pool = getTenantDB(schemaName);
    const query = util.promisify(pool.query).bind(pool); // pool.query is safe to use directly
  
    const { formName } = req.query;
    console.log("Filter Form Name", formName);
  
    try {
      const result = await query(
        "SELECT formName, control, name, sequence, type, value, Lable FROM isrbs_master.rfmaster WHERE formName = ?", 
        [formName]
      );
  
      res.status(200).json({
        message: "Data retrieved successfully",
        data: result,
      });
    } catch (error) {
      console.error("Error in /getrfmaster:", error);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
  };

  exports.getFilterData = async (req, res) => {
    const schemaName = req.schema;
    const pool = getTenantDB(schemaName); // This is a connection pool
    const query = util.promisify(pool.query).bind(pool);
  
    const { pageName, column } = req.query;
    console.log("column", column);
  
    if (!pageName || !column) {
      return res.status(400).json({ error: "Missing pageName or column" });
    }
  
    // Define allowed tables and columns
    const allowedTables = {
      customer: { table: 'customermaster', columns: ['customerName', 'customerCode'] },
      item: { table: 'itemmaster', columns: ['itemName', 'itemCode'] },
      agent: { table: 'agentmaster', columns: ['agentName'] },
      employee: { table: 'empmaster', columns: ['empName'] },
      transport: { table: 'transportmaster', columns: ['transportName'] },
      dealer: { table: 'dealermaster', columns: ['dealerName'] },
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
    }
  };
  

  exports.reportSearch = async (req, res) => {
    const schemaName = req.schema;
    const companyId = req.companyId;
    console.log("companyId", companyId);
  
    const pool = getTenantDB(schemaName);
    const query = util.promisify(pool.query).bind(pool);
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
  
    // Apply filters
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
        } else if (key.toLowerCase().includes("name") || key.toLowerCase().includes("item")) {
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
    }
  };
  
  
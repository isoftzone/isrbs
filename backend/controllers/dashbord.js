const getTenantDB = require("../config"); // This should export a function that returns a DB connection
const util = require("util");

// GET total customer count from CUSTOMERMASTER
exports.getTCustomer = async (req, res) => {
  const schemaName = req.schema;

  if (!schemaName) {
    return res.status(400).json({ error: "Schema name is missing" });
  }

  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const result = await query("SELECT COUNT(*) AS totalCustomer FROM CUSTOMERMASTER;");
    res.json({ totalCustomer: result[0].totalCustomer });
console.log(result[0].totalCustomer);
} catch (err) {
    console.error("Error fetching customer count:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (con && con.end) con.end(); // Close connection safely
  }
};

exports.getTSale = async (req, res) => {
    const schemaName = req.schema;
    const companyId = req.companyId; // Adjust according to where you send it
    const FinYear = req.query.FinYear;
  
    // Debug logs
    console.log("schemaName:", schemaName);
    console.log("companyId:", companyId);
    console.log("FinYear:", FinYear);
  
    // Validation
    if (!schemaName) {
      return res.status(400).json({ error: "Schema name is missing" });
    }
  
    if (!companyId) {
      return res.status(400).json({ error: "Company ID is missing" });
    }
  
    if (!FinYear) {
      return res.status(400).json({ error: "FinYear is missing" });
    }
  
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
  
    try {
      const result = await query(
        "SELECT SUM(NETAMOUNT) AS NetSale FROM SALESMASTER WHERE COMPANYID = ? AND FINYEAR = ?",
        [companyId, FinYear]
      );
      res.json({ NetSale: result[0].NetSale || 0 });
    } catch (err) {
      console.error("Error fetching net sale:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      if (con && con.end) con.end();
    }
  };
  
  

 
  exports.getTPurchase = async (req, res) => {
    const schemaName = req.schema;
  
    if (!schemaName) {
      return res.status(400).json({ error: "Schema name is missing" });
    }
  
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
  
    try {
      const result = await query("SELECT SUM(NETAMOUNT) AS netPurchase FROM PURCHASEMASTER ;");
      res.json({ netPurchase: result[0].netPurchase || 0 }); // fallback to 0 if null
      console.log(result[0].netPurchase);
    } catch (err) {
      console.error("Error fetching net sale:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      if (con && con.end) con.end(); // Close DB connection
    }
  };

  exports.getTStock = async (req, res) => {
    const schemaName = req.schema;
    const companyId = req.companyId;
    const finYear = req.query.FinYear;
  
    console.log("getTStock schemaName:", schemaName);
    console.log("getTStock companyId:", companyId);
    console.log("getTStock FinYear:", finYear);
  
    if (!schemaName) {
      return res.status(400).json({ error: "Schema name is missing" });
    }
    if (!companyId) {
      return res.status(400).json({ error: "Company ID is missing" });
    }
    if (!finYear) {
      return res.status(400).json({ error: "FinYear is missing" });
    }
  
    const con = getTenantDB(schemaName);
    const query = require("util").promisify(con.query).bind(con);
  
    try {
      const result = await query(
        `
        SELECT
          SUM(S.QTY) AS QTY,
          SUM(S.QTY * IM.PURPRICE) AS P_AMOUNT,
          SUM(S.QTY * IM.MRP) AS MRP_AMOUNT
        FROM ITEMMASTER IM
        JOIN (
          SELECT ITEMID, SUM(QTY) AS QTY
          FROM (
            SELECT ITEMID, (OPENINGQTY + FQTYADD - FQTYLESS) AS QTY FROM STOCK
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, QTY FROM PURCHASEDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, -QTY FROM PRDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, -QTY FROM SALESDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, QTY FROM SRDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, -QTY FROM STODETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, QTY FROM STIDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, -QTY FROM JWISSUEDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
            UNION ALL
            SELECT ITEMID, QTY FROM JWRECEVIEDETAIL
              WHERE COMPANYID = ? AND FINYEAR = ?
          ) AS ST
          GROUP BY ITEMID
        ) AS S ON IM.ITEMID = S.ITEMID;
        `,
        [
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear,
          companyId, finYear
        ]
      );
  
      console.log("Result from DB:", result);
  
      const stock = result[0] || { QTY: 0, P_AMOUNT: 0, MRP_AMOUNT: 0 };
  
      res.json({
        QTY: stock.QTY || 0,
        P_AMOUNT: stock.P_AMOUNT || 0,
        MRP_AMOUNT: stock.MRP_AMOUNT || 0
      });
    } catch (err) {
      console.error("Error fetching net stock:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      if (con && con.end) con.end();
    }
  };
  
  


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
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
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
    customer: {
      table: "customermaster",
      columns: [column],
    },
    item: { table: "itemmaster", columns: [column] },
    agent: { table: "agentmaster", columns: [column] },
    employee: { table: "empmaster", columns: [column] },
    transport: { table: "transportmaster", columns: [column] },
    dealer: { table: "dealermaster", columns: [column] },
    stockdetail: { table: "itemmaster", columns: [column] },
    salessummary: { table: "", columns: [column] },
  };

  const pageConfig = allowedTables[pageName.toLowerCase()];
  if (!pageConfig) {
    return res.status(400).json({ error: "Unknown page name" });
  }

  const { table, columns } = pageConfig;
  if (!columns.includes(column)) {
    return res
      .status(400)
      .json({ error: "Invalid column name for the specified page" });
  }

  try {
    const sql = `SELECT DISTINCT \`${column}\` FROM \`${table}\` WHERE \`${column}\` IS NOT NULL`;
    const results = await query(sql);
    const options = results.map((row) => row[column]);
    res.json({ options });
  } catch (err) {
    console.error("Error fetching dropdown options:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.reportSearch = async (req, res) => {
  const schemaName = req.schema;
  const companyId = req.companyId;
  const FinYear = req.query.FinYear;
  const pool = getTenantDB(schemaName);
  const query = util.promisify(pool.query).bind(pool);
  let orderByClause = "";
  const { pageName } = req.query;
  const filters = req.query.formData ? JSON.parse(req.query.formData) : {};
  const limit = parseInt(filters.limit) || 100;
  const offset = parseInt(filters.offset) || 0;

  // console.log("schemaName", schemaName);
  // console.log("companyId", companyId);
  // console.log("FinYear", FinYear);
  // console.log("pageName", pageName);
  // console.log("filters", filters);
  let baseQuery = "";
  const params = [];

  switch (pageName) {
    case "customer":
      baseQuery = "SELECT * FROM customermaster WHERE 1=1";
      orderByClause = " ORDER BY FIRMNAME ASC";
      break;
    case "item":
      baseQuery = "SELECT * FROM itemmaster WHERE 1=1";
      orderByClause = " ORDER BY ITEMID ASC";
      break;
    case "agent":
      baseQuery = "SELECT * FROM agentmaster WHERE 1=1";
      orderByClause = " ORDER BY FIRMNAME ASC";
      break;
    case "employee":
      baseQuery = "SELECT * FROM empmaster WHERE 1=1";
      orderByClause = " ORDER BY FNAME ASC";
      break;
    case "dealer":
      baseQuery = "SELECT * FROM dealermaster WHERE 1=1";
      orderByClause = " ORDER BY FIRMNAME ASC";
      break;
    case "transport":
      baseQuery = "SELECT * FROM transportmaster WHERE 1=1";
      orderByClause = " ORDER BY FIRMNAME ASC";
      break;
    case "Stockdetail":
      baseQuery = `
                SELECT
                    QTY, MRP, SALEPRICE, PRODUCT, BARCODE, S.ITEMID AS ITEMID,
                    LOOKUP, ITEMNAME, BRAND, I_SIZE, COLOR, SCOLOR, UNIT, PACKING,
                    BUYER, SEASON, COMPANY, SHELFNO, SECTION, MATERIAL, STYLE,
                    CATEGORY, GENDER, PURPRICE, DEALERNAME,
                    QTY * PURPRICE AS AMOUNT,
                    QTY * MRP AS MRP_AMOUNT
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
                    ) ST
                    GROUP BY ITEMID
                ) S ON S.ITEMID = IM.ITEMID
                WHERE 1=1
            `;
      // Add 18 parameters (9 tables × 2 params each)
      for (let i = 0; i < 9; i++) {
        params.push(companyId, FinYear);
      }

      orderByClause = " ORDER BY ITEMID ASC";
      break;

    case "salesreport":
      baseQuery = `
              SELECT 
              SM.SERIES, SM.SALEID, DATE_FORMAT(SM.SALEDATE, '%Y-%m-%d') AS SALES_DATE, SM.COUNTER, SM.TMODE AS T_MODE, SM.REMARK,
              CUM.FIRMNAME AS C_NAME, CUM.GSTIN AS C_GSTNO, CUM.CMOBILE, CUM.CCITY, CUM.CSTATE, CUM.AGENT,
              DM.FIRMNAME, DM.GSTIN AS D_GSTNO, DM.CMOBILE, DM.CCITY, DM.CSTATE, EM.FNAME AS EMP_NAME, HM.FNAME AS HELPER_NAME,
              SD.SRNO, IM.BARCODE, IM.ITEMNAME, IM.PRODUCT, IM.BRAND, IM.I_SIZE, IM.SCOLOR, IM.COLOR,
              IM.STYLE, IM.UNIT, IM.SUBGROUP, IM.I_GROUP, IM.SUBCATEGORY, IM.CATEGORY, IM.BUYER, IM.SEASON,
              IM.GENDER, IM.MATERIAL, IM.COMPANY, IM.PACKING, IM.BOXSIZE, IM.HSNCODE, IM.MINQTY,
              IM.MAXQTY, IM.REORDERQTY, IM.SHELFNO, IM.SECTION, IM.EXPIRYDAYS, SD.NARRATION,
              IM.RATE, IM.TAX, IM.PURPRICE, IM.MRP, IM.SALEPRICE, IM.SP1,
              IM.SP2, IM.SP3, IM.SP4, IM.ESTAG, IM.ESAMOUNT,
              SD.MRP AS S_MRP, SD.SALEPRICE AS S_SALEPRICE, SD.QTY, SD.DISCOUNT AS I_DISC, SD.DISCAMOUNT AS I_DISCAMOUNT, SD.AMOUNT,
              SD.ADDDISC AS B_DISC, SD.AMOUNT * (SD.ADDDISC / 100) AS B_DISCAMOUNT, SD.ADDDISCA AS T_DISCAMOUNT,
              SD.AMOUNT - (SD.AMOUNT * (SD.ADDDISC / 100)) AS N_AMOUNT, SD.TAX AS B_TAX, SD.TAXAMOUNT AS B_TAXAMOUNT,
              SD.NRATE AS BASE_RATE, SD.SGSTP, SD.CGSTP, SD.IGSTP, SD.SGSTA, SD.CGSTA, SD.IGSTA,
               (SD.NRATE - IM.RATE) * SD.QTY AS PROFIT
          FROM ITEMMASTER IM
          JOIN SALESDETAIL SD ON IM.COMPANYID = SD.COMPANYID AND SD.ITEMID = IM.ITEMID
          JOIN SALESMASTER SM ON SD.COMPANYID = SM.COMPANYID AND SD.FINYEAR = SM.FINYEAR 
          AND SM.SERIES = SD.SERIES AND SM.SALEID = SD.SALEID
          JOIN EMPMASTER EM ON SD.EMPID = EM.EMPID
          JOIN EMPMASTER HM ON SD.HELPERID = HM.EMPID
          LEFT JOIN CUSTOMERMASTER CUM ON CUM.CUSTOMERID = SM.CUSTOMERID
          LEFT JOIN DEALERMASTER DM ON DM.DEALERID = IM.DEALERID
          WHERE SM.COMPANYID = ? AND SM.FINYEAR = ?
      `;
      params.push(companyId, FinYear);

      orderByClause = " ORDER BY SM.SERIES,SM.SALEID,SD.SRNO ASC";

      break;

    case "salessummary":
      baseQuery = `
        SELECT 
            CONCAT(SM.SERIES, ' - ', SM.SALEID) AS NO,
            DATE_FORMAT(SM.SALEDATE, '%d/%m/%Y') AS SALE_DATE,
            SM.TMODE, SM.CUSTOMERID,
            CM.FIRMNAME AS CUSTOMER,
            SM.ITEMQTY AS QTY,
            SM.TOTALAMOUNT AS AMOUNT,
            SM.DISCOUNT,
            SM.NETAMOUNT,
            SM.AMOUNTPAID,
            SM.BALANCE,
            SM.CARDAMOUNT,
            SM.GRAMOUNT,
            SM.COUNTER
        FROM SALESMASTER SM
        LEFT JOIN CUSTOMERMASTER CM ON SM.CUSTOMERID = CM.CUSTOMERID
        WHERE SM.FINYEAR = ? AND SM.COMPANYID = ?
    `;
      params.push(FinYear, companyId);

      orderByClause = " ORDER BY SM.SERIES,SM.SALEID ASC";

      break;

    case "SalesProfitDetail":
      baseQuery = `
        SELECT 
            CONCAT(LEFT(SM.SERIES, 1), '-', SM.SALEID) AS SALE,
            SM.SALEID AS NO,
            DATE_FORMAT(SM.SALEDATE, '%d/%m/%Y') AS DATE,
            SM.DISCOUNT,
            SD.SRNO,
            SD.BARCODE,
            SD.ITEMDESC,
            SD.QTY AS ITEMS,
            IM.PURPRICE,
            SD.MRP,
            SD.AMOUNT AS AMOUNT,
            (SD.AMOUNT - (SD.AMOUNT * SM.DISCOUNT / 100)) AS NETAMOUNT,
            (SD.AMOUNT - (SD.AMOUNT * SM.DISCOUNT / 100) - IM.PURPRICE * SD.QTY) AS PROFIT
        FROM SALESDETAIL SD
        JOIN SALESMASTER SM ON 
            SD.COMPANYID = SM.COMPANYID AND 
            SD.FINYEAR = SM.FINYEAR AND 
            SM.SERIES = SD.SERIES AND 
            SM.SALEID = SD.SALEID
        JOIN ITEMMASTER IM ON SD.ITEMID = IM.ITEMID
        WHERE SM.FINYEAR = ? AND SM.COMPANYID = ?
    `;
      params.push(FinYear, companyId);

      orderByClause = " ORDER BY SM.SERIES,SM.SALEID,SD.SRNO ASC";

      break;

    case "salesreturn":
      baseQuery = `
        SELECT 
            SM.SERIES, SM.SALEID, DATE_FORMAT(SM.SALEDATE, '%Y-%m-%d') AS SALES_DATE, SM.COUNTER, SM.TMODE AS T_MODE, SM.REMARK,
            CUM.FIRMNAME AS C_NAME, CUM.GSTIN AS C_GSTNO, CUM.CMOBILE, CUM.CCITY, CUM.CSTATE, CUM.AGENT,
            DM.FIRMNAME, DM.GSTIN AS D_GSTNO, DM.CMOBILE, DM.CCITY, DM.CSTATE, EM.FNAME AS EMP_NAME, HM.FNAME AS HELPER_NAME,
            SD.SRNO, IM.BARCODE, IM.ITEMNAME, IM.PRODUCT, IM.BRAND, IM.I_SIZE, IM.SCOLOR, IM.COLOR,
            IM.STYLE, IM.UNIT, IM.SUBGROUP, IM.I_GROUP, IM.SUBCATEGORY, IM.CATEGORY, IM.BUYER, IM.SEASON,
            IM.GENDER, IM.MATERIAL, IM.COMPANY, IM.PACKING, IM.BOXSIZE, IM.HSNCODE, IM.MINQTY,
            IM.MAXQTY, IM.REORDERQTY, IM.SHELFNO, IM.SECTION, IM.EXPIRYDAYS, SD.NARRATION,
            IM.RATE, IM.TAX, IM.CESS, IM.PURPRICE, IM.MRP, IM.SALEPRICE, IM.SP1,
            IM.SP2, IM.SP3, IM.SP4, IM.ESTAG, IM.ESAMOUNT,
            SD.MRP AS S_MRP, SD.SALEPRICE AS S_SALEPRICE, -SD.QTY AS QTY, -SD.DISCOUNT AS I_DISC, -SD.DISCAMOUNT AS I_DISCAMOUNT, -SD.AMOUNT AS AMOUNT,
            -SD.ADDDISC AS B_DISC, -SD.AMOUNT * (SD.ADDDISC / 100) AS B_DISCAMOUNT, -SD.ADDDISCA AS T_DISCAMOUNT,
            -(SD.AMOUNT - (SD.AMOUNT * (SD.ADDDISC / 100))) AS N_AMOUNT, SD.TAX AS B_TAX, -SD.TAXAMOUNT AS B_TAXAMOUNT,
            SD.NRATE AS BASE_RATE, SD.SGSTP, SD.CGSTP, SD.IGSTP, -SD.SGSTA, -SD.CGSTA, -SD.IGSTA,
            SD.CESS AS B_CESS, -SD.CESSAMOUNT AS CESSAMOUNT, -(SD.NRATE - IM.RATE) * SD.QTY AS PROFIT
        FROM ITEMMASTER IM
        JOIN SRDETAIL SD ON IM.COMPANYID = SD.COMPANYID AND SD.ITEMID = IM.ITEMID
        JOIN SRMASTER SM ON SD.COMPANYID = SM.COMPANYID AND SD.FINYEAR = SM.FINYEAR AND SM.SERIES = SD.SERIES AND SM.SALEID = SD.SALEID
        JOIN EMPMASTER EM ON SD.EMPID = EM.EMPID
        LEFT JOIN EMPMASTER HM ON SD.HELPERID = HM.EMPID
        LEFT JOIN CUSTOMERMASTER CUM ON CUM.CUSTOMERID = SM.CUSTOMERID
        LEFT JOIN DEALERMASTER DM ON DM.DEALERID = IM.DEALERID
        WHERE SM.COMPANYID = ? AND SM.FINYEAR = ?
        
    `;
      params.push(companyId, FinYear);
      orderByClause = " ORDER BY SM.SERIES,SM.SALEID,SD.SRNO ASC";
      break;

    default:
      return res.status(400).json({ error: "Unknown page name" });
  }

  // Apply filters
  if (filters && typeof filters === "object" && !Array.isArray(filters)) {
    for (const [key, value] of Object.entries(filters)) {
      //Code Start
      // Skip limit and offset
      // if (key === "limit" || key === "offset") continue;
      // Skip empty values
      ////if (!value || ['limit', 'offset'].includes(key)) continue;
      // Code End

      // Skip null values
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

  baseQuery += orderByClause;

  //// New Code with pagination start

  // // Add pagination
  //   baseQuery += ` LIMIT ? OFFSET ?`;
  //   params.push(limit, offset);

  //   try {
  //     // Optional: Redis caching
  //     const redisKey = `sales-report:${JSON.stringify(filters)}:${limit}:${offset}`;
  //     const cached = await redis.get(redisKey);
  //     if (cached) return res.json(JSON.parse(cached));

  //     const result = await query(baseQuery, params);

  //     await redis.set(redisKey, JSON.stringify(result), 'EX', 60); // Cache for 60s
  //     res.json(result);
  //   } catch (err) {
  //     console.error("Error executing sales report query:", err);
  //     res.status(500).json({ error: "Query execution failed" });
  //   }

  //// New Code with pagination End

  // Old Code without pagination start
  try {
    const result = await query(baseQuery, params);
    res.json(result);
    // console.log("result", result);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ error: "Query execution failed" });
  }
  // Old Code without pagination end
};

//   exports.reportSearch = async (req, res) => {
//     const schemaName = req.schema;
//     const companyId = req.companyId;
//     const FinYear = req.query.FinYear;
//     console.log("companyId", companyId);
//     console.log("FinYear", FinYear);
//     const pool = getTenantDB(schemaName);
//     const query = util.promisify(pool.query).bind(pool);
//     const { pageName } = req.query;
//     const filters = req.query.formData ? JSON.parse(req.query.formData) : {};

//     let baseQuery = "";
//     const params = [];

//     switch (pageName) {
//       case "customer":
//         baseQuery = "SELECT * FROM customermaster WHERE 1=1";
//         break;
//       case "item":
//         baseQuery = "SELECT * FROM itemmaster WHERE 1=1";
//         break;
//       case "agent":
//         baseQuery = "SELECT * FROM agentmaster WHERE 1=1";
//         break;
//       case "employee":
//         baseQuery = "SELECT * FROM empmaster WHERE 1=1";
//         break;
//       case "dealer":
//         baseQuery = "SELECT * FROM dealermaster WHERE 1=1";
//         break;
//       case "transport":
//         baseQuery = "SELECT * FROM transportmaster WHERE 1=1";
//         break;
//         case "stockdetail":
//         baseQuery = "SELECT
//         QTY,    MRP,
//         SALEPRICE,    PRODUCT,
//         BARCODE,    S.ITEMID AS ITEMID,
//         LOOKUP,    ITEMNAME,
//         BRAND,    I_SIZE,
//         COLOR,    SCOLOR,
//         UNIT,    PACKING,
//         BUYER,    SEASON,
//         COMPANY,    SHELFNO,
//         SEASON,    SECTION,
//         MATERIAL,    STYLE,
//         CATEGORY,    GENDER,
//         PURPRICE,    DEALERNAME,    QTY * PURPRICE AS AMOUNT,
//         QTY * MRP AS MRP_AMOUNT
//     FROM ITEMMASTER IM,
//     (
//         SELECT ITEMID, SUM(QTY) AS QTY
//         FROM (
//             SELECT ITEMID, (OPENINGQTY + FQTYADD - FQTYLESS) AS QTY FROM STOCK
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, QTY FROM PURCHASEDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEA2R = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, -QTY FROM PRDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, -QTY FROM SALESDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, QTY FROM SRDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, -QTY FROM STODETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, QTY FROM STIDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, -QTY FROM JWISSUEDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//             UNION ALL
//             SELECT ITEMID, QTY FROM JWRECEVIEDETAIL
//             WHERE COMPANYID = '{companyid}' AND FINYEAR = '{finyear}'
//         ) ST
//         GROUP BY ITEMID
//     ) S
//     WHERE 1=1 and S.ITEMID = IM.ITEMID";
//         break;
//       default:
//         return res.status(400).json({ error: "Unknown page name" });
//     }

//     // Apply filters
//     if (filters && typeof filters === "object" && !Array.isArray(filters)) {
//       for (const [key, value] of Object.entries(filters)) {
//         if (value === null || value === "") continue;

//         if (key.toLowerCase().includes("from")) {
//           const column = key.replace(/From/i, "");
//           baseQuery += ` AND \`${column}\` >= ?`;
//           params.push(value);
//         } else if (key.toLowerCase().includes("to")) {
//           const column = key.replace(/To/i, "");
//           baseQuery += ` AND \`${column}\` <= ?`;
//           params.push(value);
//         } else if (key.toLowerCase().includes("name") || key.toLowerCase().includes("item")) {
//           baseQuery += ` AND \`${key}\` LIKE ?`;
//           params.push(`%${value}%`);
//         } else {
//           baseQuery += ` AND \`${key}\` = ?`;
//           params.push(value);
//         }
//       }
//     }

//     try {
//       const result = await query(baseQuery, params);
//       res.json(result);
//     } catch (err) {
//       console.error("Error executing query:", err);
//       res.status(500).json({ error: "Query execution failed" });
//     }
//   };

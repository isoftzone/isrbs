const getTenantDB = require("../config"); // this should export a function
const util = require("util");

// Controller to fetch data from the rfmaster table with optional filtering by codetype and pagination
// exports.getrfmaster = async (req, res) => {
//     try {
//         // Destructure query parameters and set defaults for pagination
//         const { codetype, page = 0, limit = 10 } = req.query;
//         const offset = (page - 0) * limit;

//         let query = 'SELECT * FROM rfmaster'; // Base query
//         const queryParams = [];

//         // Add filtering if codetype is provided (and not 'All')
//         if (codetype && codetype !== 'All') {
//             query += ' WHERE CODETYPE = ?';
//             queryParams.push(codetype);
//         }

//         query += ' LIMIT ?, ?'; // Pagination
//         queryParams.push(offset, parseInt(limit));

//         console.log("Executing query:", query, queryParams);

//         // Fetch filtered data with pagination
//         const results = await new Promise((resolve, reject) => {
//             con.query(query, queryParams, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });

//         // Fetch total records count for pagination
//         let countQuery = 'SELECT COUNT(*) AS totalRecords FROM rfmaster';
//         const countParams = [];

//         if (codetype && codetype !== 'All') {
//             countQuery += ' WHERE CODETYPE = ?';
//             countParams.push(codetype);
//         }

//         const countResults = await new Promise((resolve, reject) => {
//             con.query(countQuery, countParams, (err, countResult) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(countResult[0].totalRecords);
//                 }
//             });
//         });

//         // Return data and total record count in response
//         return res.status(200).json({
//             message: 'Data retrieved successfully',
//             data: results,
//             totalRecords: countResults,
//         });

//     } catch (error) {
//         console.error('Database query error in getrfmaster:', error);
//         return res.status(500).json({
//             error: 'Database error in getrfmaster',
//             details: error.message,
//         });
//     }
// };

<<<<<<< Updated upstream
exports.getFilter = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);
// const  {formName} = req.body;
const { formName } = req.query;
console.log("formName",formName)
  try {
    const result = await query(
      "SELECT formName, control, name, sequence,  type, value, Lable FROM isrbs_master.rfmaster where formName = ?", [formName]
=======
// exports.getrfmaster = async (req, res) => {
//   const schemaName = req.schema;
//   const con = getTenantDB(schemaName);
//   const query = util.promisify(con.query).bind(con);
//   const { formName } = req.body;
//   // Console.log("formName", formName);
//   console.log("formName", formName)
  
//   try {
//     const result = await query(
//       "SELECT formName, control, name, sequence,  type, value FROM isrbs_master.rfmaster where formName = formName"
//     );

//     res.status(200).json({
//       message: "Data retrieved successfully",
//       data: result,
//     });
//   } catch (err) {
//     console.error("Error in /getrfmaster:", error);
//     res
//       .status(500)
//       .json({ error: "Internal server error", details: error.message });
//   } finally {
//     con.end(); // Close connection
//   }
// };

exports.getrfmaster = async (req, res) => {
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);
  const { formName } = req.query;

  console.log("formName", formName);

  try {
    const result = await query(
      "SELECT formName, control, name, sequence, type, value FROM isrbs_master.rfmaster WHERE formName = ?",
      [formName]
>>>>>>> Stashed changes
    );

    res.status(200).json({
      message: "Data retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in /getrfmaster:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  } finally {
    con.end(); // Close connection
  }
};


// Controller to fetch data from master_set table with pagination
// exports.getMasterSet = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const pageSize = parseInt(req.query.limit) || 10;
//     const offset = (page - 1) * pageSize;

//     // Query to fetch data with pagination
//     const results = await new Promise((resolve, reject) => {
//       con.query(
//         "SELECT * FROM master_set LIMIT ?, ?",
//         [offset, pageSize],
//         (err, results) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(results);
//           }
//         }
//       );
//     });

//     const countResults = await new Promise((resolve, reject) => {
//       con.query(
//         "SELECT COUNT(*) AS totalRecords FROM master_set",
//         (err, count) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(count[0].totalRecords);
//           }
//         }
//       );
//     });

//     return res.status(200).json({
//       message: "Data retrieved successfully",
//       records: results,
//       totalRecords: countResults,
//     });
//   } catch (error) {
//     console.error("Database query error in getMasterSet:", error);
//     return res.status(500).json({
//       error: "Database error in getMasterSet",
//       details: error.message,
//     });
//   }
// };

// exports.getAllData = async (req, res) => {
//   const schemaName = req.schema; // set by middleware
//   const tableName = req.query.tableName;
//   console.log("tableName", tableName);

//   if (!tableName) {
//     return res.status(400).json({ error: "Page name (tableName) is required" });
//   }

//   const con = getTenantDB(schemaName);
//   const query = util.promisify(con.query).bind(con);

//   try {
//     const result = await query(`SELECT * FROM ??`, [tableName]);

//     res.status(200).json(result);
//   } catch (error) {
//     console.error(`Error in /getMaster:`, error);
//     res.status(500).json({
//       error: "Internal server error",
//       details: error.message,
//     });
//   } finally {
//     con.end();
//   }
// };










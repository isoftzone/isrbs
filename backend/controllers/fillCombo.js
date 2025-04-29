// // const express = require("express");
// // const con = require('../config')

// //  exports.getcmb = async (req, res) => {
// //     const data = req.params.id;
// //     const arr = data.split(",")
// //     // console.log(data.toString());
// //     console.log(arr);
// //     // console.log(data.name)
// //     // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
// //     await con.query("SELECT PRIMENAME, PRIMEKEYID FROM master WHERE Codetype = 'Status' Order by SEQUENCE, PRIMENAME", (err, result) => {
// //          if (err) {
// //              throw err;
// //          }
// //          res.json(result);
// //      });
// //  };
// const express = require("express");
// const con = require('../config')

//  exports.postcmb = async (req, res) => {

//     const {WhFldName,FldName,TblName,FldCode,OrdBy} = req.body
//     console.log(WhFldName,FldName,TblName,FldCode,OrdBy);
//     // console.log(data.name)
//     // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
//     await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
//          if (err) {
//              throw err;
//          }
//          res.json(result);
//      });
//  };

//  exports.postcmbSW = async (req, res) => {

//     const {WhFldName,FldName,TblName,FldCode,OrdBy} = req.body
//     console.log(WhFldName,FldName,TblName,FldCode,OrdBy);
//     // console.log(data.name)
//     // SELECT PRIMENAME, SEQUENCE FROM master WHERE CODETYPE = ?
//     await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
//          if (err) {
//              throw err;
//          }
//          res.json(result);
//      });
//  };
// //  exports.postcmbAW = async (req, res) => {
// //     const {TblName,FldName,FldCode,OrdBy,WhFldName,} = req.body
// //     console.log(req.body)
// //     await con.query(`SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${WhFldName}' Order by '${OrdBy}', '${FldName}'`, (err, result) => {
// //          if (err) {
// //              throw err;
// //          }
// //          res.json(result);
// //      });
// //  };

// // exports.postcmbAW = async (req, res) => {
// //     const {TblName, FldName, FldCode, OrdBy, WhFldName} = req.body;
// //     console.log(req.body);

// //     if (!Array.isArray(WhFldName)) {
// //         return res.status(400).json({ error: "WhFldName must be an array" });
// //     }

// //     try {
// //         const results = {};

// //         for (const field of WhFldName) {
// //             const query = `SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${field}' ORDER BY ${OrdBy}, ${FldName}`;
// //             const [rows] = await con.promise().query(query);
// //             results[field] = rows;
// //         }

// //         res.json(results);
// //     } catch (err) {
// //         console.error(err);
// //         res.status(500).json({ error: "Database query failed" });
// //     }
// // };
// exports.postcmbAW = (req, res) => {
//     const { TblName, FldName, FldCode, OrdBy, WhFldName } = req.body;
//     console.log(req.body);

//     if (!Array.isArray(WhFldName)) {
//         return res.status(400).json({ error: "WhFldName must be an array" });
//     }

//     const results = {};
//     const queries = WhFldName.map(field => {
//         return new Promise((resolve, reject) => {
//             const query = `SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${field}' ORDER BY ${OrdBy}, ${FldName}`;
//             con.query(query, (err, rows) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 results[field] = rows;
//                 resolve();
//             });
//         });
//     });

//     Promise.all(queries)
//         .then(() => res.json(results))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: "Database query failed" });
//         });
// };
// exports.postcsbAW = (req, res) => {
//     const { TblName, FldName, FldCode, OrdBy, WhFldName } = req.body;
//     console.log(req.body);

//     if (!Array.isArray(WhFldName)) {
//         return res.status(400).json({ error: "WhFldName must be an array" });
//     }

//     const results = {};
//     const queries = WhFldName.map(field => {
//         return new Promise((resolve, reject) => {
//             const query = `SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${field}' ORDER BY ${OrdBy}, ${FldName}`;
//             con.query(query, (err, rows) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 results[field] = rows;
//                 resolve();
//             });
//         });
//     });

//     Promise.all(queries)
//         .then(() => res.json(results))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: "Database query failed" });
//         });
// };

// exports.getcmbAW = (req, res) => {
//     const { TblName, FldName, FldCode, OrdBy } = req.query;
//     let WhFldName = req.query.WhFldName;

//     // Ensure WhFldName is an array (in case it's a single value, convert it)
//     if (!WhFldName) {
//         return res.status(400).json({ error: "WhFldName is required" });
//     }
//     if (!Array.isArray(WhFldName)) {
//         WhFldName = [WhFldName]; // Convert to array if it's a single value
//     }

//     console.log(req.query);

//     const results = {};
//     const queries = WhFldName.map(field => {
//         return new Promise((resolve, reject) => {
//             const query = `SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${field}' ORDER BY ${OrdBy}, ${FldName}`;
//             con.query(query, (err, rows) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 results[field] = rows;
//                 resolve();
//             });
//         });
//     });

//     Promise.all(queries)
//         .then(() => res.json(results))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: "Database query failed" });
//         });
// };

// exports.postcsbAW = (req, res) => {
//     const { TblName, FldName, FldCode, OrdBy, WhFldName } = req.body;
//     console.log(req.body);

//     if (!Array.isArray(WhFldName)) {
//         return res.status(400).json({ error: "WhFldName must be an array" });
//     }

//     const results = {};
//     const queries = WhFldName.map(field => {
//         return new Promise((resolve, reject) => {
//             const query = `SELECT ${FldName}, ${FldCode} FROM ${TblName} WHERE Codetype = '${field}' ORDER BY ${OrdBy}, ${FldName}`;
//             con.query(query, (err, rows) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 results[field] = rows;
//                 resolve();
//             });
//         });
//     });

//     Promise.all(queries)
//         .then(() => res.json(results))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: "Database query failed" });
//         });
// };

const getTenantDB = require("../config");
const util = require("util");

exports.postcmbAW = async (req, res) => {
  const { TblName, FldName, FldCode, OrdBy, WhFldName } = req.body;
  console.log(req.body);
  const schemaName = req.schema; // tenant schema from jwt middleware

  console.log(req.body);

  if (!schemaName) {
    return res.status(400).json({ error: "Schema name is missing" });
  }

  if (!TblName || !FldName || !FldCode || !OrdBy || !WhFldName) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  try {
    const sql = `SELECT ?? AS name, ?? AS code FROM ?? WHERE Codetype = ? ORDER BY ??, ??`;
    const params = [FldName, FldCode, TblName, WhFldName, OrdBy, FldName];

    const rows = await query(sql, params);

    res.json({
      message: "Data fetched successfully",
      data: { [WhFldName]: rows },
    });
  } catch (err) {
    console.error("Error in postcmbAW:", err);
    res.status(500).json({ error: "Database query failed" });
  } finally {
    con.end();
  }
};

// Get dropdown options based on formName and fieldName
exports.getDropdownData = async (req, res) => {
  console.log("colled");
  const schemaName = req.schema;
  const con = getTenantDB(schemaName);
  const query = util.promisify(con.query).bind(con);

  const { formName, fieldName } = req.params;
  console.log(req.params);
  try {
    // Example: formName = "Agent", fieldName = "Name"
    const sql = `SELECT DISTINCT ?? AS value FROM ?? WHERE ?? IS NOT NULL`;
    const params = [fieldName, formName, fieldName];

    const result = await query(sql, params);

    res.status(200).json({
      message: "Dropdown options retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in /getDropdownData:", error);
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  } finally {
    con.end();
  }
};

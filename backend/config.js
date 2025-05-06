// const mysql = require("mysql");

// const getTenantDB = (schemaName) => {
//   const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT || 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: schemaName,
//   });
  
//   connection.connect((err) => {
//     if (err) {
//       console.error(`Error connecting to schema [${schemaName}]:`, err);
//     } else {
//       //console.log(`Connected to schema : ${schemaName}`);
//     }
//   });

//   return connection;
// };

// module.exports = getTenantDB;




// config.js
const mysql = require("mysql");

const poolMap = new Map();

function getTenantDB(schemaName) {
  if (poolMap.has(schemaName)) return poolMap.get(schemaName);

  const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: schemaName,
  });

  poolMap.set(schemaName, pool);
  return pool;
}

module.exports = getTenantDB;







// const mysql = require("mysql");
// console.log('Global SCHEMANAME set:', global.SCHEMANAME);
// const con = mysql.createConnection({ 
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT || 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: global.SCHEMANAME
// });

// con.connect((err) => {
//   if (err) {
//     console.error(`❌ Tenant DB Connection Error [${global.SCHEMANAME}]:`, err);
//   } else {
//     console.log(`✅ Connected to tenant schema: ${global.SCHEMANAME}`);
//   }
// });   


// module.exports= con;


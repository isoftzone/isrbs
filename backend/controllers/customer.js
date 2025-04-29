const express = require("express");
const getTenantDB = require('../config'); 
const util = require("util");

exports.customerAdd = async(req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
  
    try {
      const data = req.body;
      await query('INSERT INTO customermaster SET ?', data);
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (err) {
      // console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into agentmaster table' });
    } finally {
      con.end(); // Close connection
    }
};

// GET all records from agentmaster
exports.getcustomerMaster = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
  
    try {
      const result = await query('SELECT * FROM customermaster');
      // console.log("this is fatch data: ", result)
      res.json(result);
    } catch (err) {
      console.error("Error fetching customermaster:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      con.end(); // Close connection
    }
  };

  //  search api
  exports.customerMastersearch = async (req, res) => {
    console.log("called search !..")
    const schemaName = req.schema;   
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con);
  
    // Extract search parameters from the request query
    const { firmName, customerName, mobile, state, city, status, gstin, saleprice } = req.query;
     console.log("this is data back", req.query)
    let whereConditions = [];
    let queryParams = [];
  
    // Build conditions based on provided query parameters
    if (firmName) {
      whereConditions.push('FIRMNAME LIKE ?');
      queryParams.push(`%${firmName}%`);
    }
  
    if (customerName) {
      whereConditions.push('CUSTOMERNAME LIKE ?');
      queryParams.push(`%${customerName}%`);
    }
  
    if (mobile) {
      whereConditions.push('CMOBILE LIKE ?');
      queryParams.push(`%${mobile}%`);
    }
  
    if (state) {
      whereConditions.push('CSTATE LIKE ?');
      queryParams.push(`%${state}%`);
    }
  
    if (city) {
      whereConditions.push('CCITY LIKE ?');
      queryParams.push(`%${city}%`);
    }
  
    if (gstin) {
      whereConditions.push('GSTIN LIKE ?');
      queryParams.push(`%${gstin}%`);
    }
    if (saleprice) {
      whereConditions.push('SALEPRICE LIKE ?');
      queryParams.push(`%${saleprice}%`);
    }
  
  
    // If no filter is provided, fetch all customers
    let sqlQuery = 'SELECT * FROM customermaster';
    if (whereConditions.length > 0) {
      sqlQuery += ' WHERE ' + whereConditions.join(' AND ');
    }
  
    try {
      // Execute the query with parameters to prevent SQL injection
      const result = await query(sqlQuery, queryParams);
      // console.log("Fetched data: ", result);
      res.json(result);
    } catch (err) {
      // console.error("Error fetching customer data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      con.end(); // Close connection
    }
  };


//  exports.getCustomer = async (req, res) => {
//     await con.query('SELECT * FROM customermaster', (err, result) => {
//          if (err) {
//              throw err;
//          }
//          res.json(result);
//      });
//  };

//  exports.updateCustomerInfo = (req, res) => {
//   const {
//     FNAME,
//     LNAME,
//     email,
//     customerId,
//     MOBILE,
//     CADDRESSLINE1,
//     CCITY,
//     CSTATE,
//     CCOUNTRY,
//     CDISTRICT,
//     CPINCODE,
//     password
//   } = req.body;


//   if (!customerId) {
//     return res.status(400).json({ error: 'Customer ID is missing' });
//   }

//   // Build query
//   const fields = [
//     'FNAME = ?',
//     'LNAME = ?',
//     'email = ?',
//     'MOBILE = ?',
//     'CADDRESSLINE1 = ?',
//     'CCITY = ?',
//     'CSTATE = ?',
//     'CCOUNTRY = ?',
//     'CDISTRICT = ?',
//     'CPINCODE = ?'
//   ];
//   const values = [FNAME, LNAME, email, MOBILE, CADDRESSLINE1, CCITY, CSTATE, CCOUNTRY, CDISTRICT, CPINCODE];

//   if (password) {
//     fields.push('password = ?');
//     values.push(password); // plain text password
//   }

//   values.push(customerId); // for WHERE condition

//   const sql = `UPDATE customermaster SET ${fields.join(', ')} WHERE CUSTOMERID = ?`;

//   con.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('Database update error:', err);
//       return res.status(500).json({ error: 'Database update failed', message: err.message });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'Customer not found' });
//     }

//     return res.status(200).json({ message: 'Account Information updated successfully' });
//   });
// };

//  exports.getcustomerbyid = (req, res) => {
//   const { customerId } = req.params;
//   if (!customerId) {
//     return res.status(400).json({ error: 'Customer ID is required' });
//   }

//   con.query(
//     'SELECT FNAME, LNAME, email, MOBILE, CADDRESSLINE1, CCITY, CSTATE, CCOUNTRY, CDISTRICT, CPINCODE FROM customermaster WHERE CUSTOMERID = ?',
//     [customerId],
//     (err, result) => {
//       if (err) {
//         console.error('Database error:', err);
//         return res.status(500).json({ 
//           error: 'Database error',
//           message: err.message 
//         });
//       }

//       if (result.length === 0) {
//         return res.status(404).json({ message: 'Customer not found' });
//       }

//       res.json(result[0]);
//     }
//   );
// };
  

//  exports.addcustomer = (req, res) => {
//     const { name, mobile, email, password } = req.body;
  
//     if (!name || !mobile || !email || !password) {
//       return res.status(400).json({ 
//         success: false,
//         msg: "All fields are required"
//       });
//     }
  
//     const checkEmailQuery = 'SELECT * FROM customermaster WHERE email = ?';
  
//     con.query(checkEmailQuery, [email], (err, results) => {
//       if (err) {
//         console.error("❌ Email check error:", err);
//         return res.status(500).json({
//           success: false,
//           msg: "Internal server error",
//           error: err.message
//         });
//       }
  
//       if (results.length > 0) {
//         return res.status(400).json({
//           success: false,
//           msg: "Email already exists"
//         });
//       }
  
//       const newCustomer = { name, mobile, email, password };
//       const insertQuery = 'INSERT INTO customermaster SET ?';
  
//       con.query(insertQuery, newCustomer, (insertErr, insertResults) => {
//         if (insertErr) {
//           console.error("❌ Insert error:", insertErr);
//           return res.status(500).json({
//             success: false,
//             msg: "Internal server error",
//             error: insertErr.message
//           });
//         }
  
//         return res.status(201).json({
//           success: true,
//           msg: "New customer created successfully",
//           newCustomer
//         });
//       });
//     });
//   };
  
  
// exports.getAll = async (req, res) => {
//    await con.query('SELECT * FROM customermaster', (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.json(result);
//     });
// };

// exports.deletecustomer = async (req, res) => {
//     const customerId = req.params.id;
//     await con.query('DELETE FROM customermaster WHERE id = ?', customerId, (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.send('customer deleted successfully');
//     });
// };

// exports.logincustomer = (req, res) => {
//     const { email, password } = req.body;
  
//     console.log("Received login request:", { email, password });
  
//     if (!email || !password) {
//       return res.status(400).json({ msg: "Email and password are required" });
//     }
  
//     const query = "SELECT * FROM customermaster WHERE email = ?";
//     con.query(query, [email], (error, results) => {
//       if (error) {
//         console.error("Database query error:", error);
//         return res.status(500).json({ msg: "Internal server error" });
//       }
  
//       if (results.length === 0) {
//         return res.status(401).json({ msg: "Customer does not exist" });
//       }
  
//       const customer = results[0];
//   console.log(customer);
//       if (customer.password !== password) {
//         return res.status(401).json({ msg: "Invalid password" });
//       }
  
//       // ✅ Login success
//       return res.status(200).json({
//         msg: "Login successful",
//         customer: {
//           id: customer.CUSTOMERID, 
//           name: customer.NAME,
//           email: customer.email,
//         },
//       });
//     });
//   };

// exports.editcustomer = async (req, res) => {
//     try {
//         const { id } = req.params; 
//         const { name, email } = req.body; 

     
//         const updatedcustomer = { name, email };

       
//         con.query('UPDATE customermaster SET ? WHERE id = ?', [updatedcustomer, id], (error, result) => {
//             if (error) {
//                 console.error('Error updating customer:', error);
//                 return res.status(500).send({ error: 'Internal Server Error' });
//             }

            
//             if (result.affectedRows === 0) {
//                 return res.status(404).send({ error: 'customer not found' });
//             }

         
//             res.status(200).send({ msg: 'customer updated successfully', updatedcustomer });
//         });
//     } catch (error) {
//         console.error('Error editing customer:', error);
//         res.status(500).send({ error: 'Internal Server Error' });
//     }
// };
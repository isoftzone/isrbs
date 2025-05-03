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
const express = require("express");
const con = require('../config')

const getTenantDB = require("../config"); // this should export a function
const util = require("util");


exports.getDealer = async (req, res) => {
    await con.query('SELECT * FROM dealermaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };



 exports.getdealers = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con); // :key: Convert to promise
    try {
        const result = await query('SELECT * FROM dealermaster');
        res.json(result);
    } catch (err) {
        console.error('Error fetching dealermaster:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        con.end(); // :white_tick: Always close the connection
    }
  };
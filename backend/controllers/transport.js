const express = require("express");
const con = require('../config')

const getTenantDB = require("../config"); // this should export a function
const util = require("util");

exports.getTransport = async (req, res) => {
    await con.query('SELECT * FROM transportmaster', (err, result) => {
         if (err) {
             throw err;
         }
         res.json(result);
     });
 };

 exports.getTransport = async (req, res) => {
    const schemaName = req.schema;
    const con = getTenantDB(schemaName);
    const query = util.promisify(con.query).bind(con); // :key: Convert to promise
    try {
        const result = await query('SELECT * FROM transportmaster');
        res.json(result);
    } catch (err) {
        console.error('Error fetching transportmaster:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        con.end(); // :white_tick: Always close the connection
    }
  };
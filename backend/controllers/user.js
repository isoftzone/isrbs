const express = require("express");
const connection = require('../dbMaster');
const { createToken, maxAge } = require("../utils/createToken");
const con = require("../config");

exports.addUser = async (req, res) => {

    const { id, name, email, password, companyid } = req.body;
    const newUser = { id, name, email, password, companyid }
   await connection.query('INSERT INTO usermaster SET ?', newUser, (error, result, fields) => {
        if (error) console.log(error);
        res.status(201).send({
            msg: "new user created successfully",
            newUser
        })
    });
};
exports.getAll = async (req, res) => {  console.log('Global SCHEMANAME set:', global.SCHEMANAME);
   await connection.query('SELECT * FROM usermaster', (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    });
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    await connection.query('DELETE FROM usermaster WHERE id = ?', userId, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('User deleted successfully');
    });
};

exports.loginUser = async (req, res) => { 
    const { email, password } = req.body;
  
    console.log('Received login request:', { email, password });
  
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }
  
    await connection.query('SELECT * FROM usermaster WHERE email = ?', [email], (error, results, fields) => {
      if (error) {
        console.error('Database query error:', error);
        return res.status(500).send("Internal Server Error");
      }
  
      if (results.length === 0) {
        console.log('User not found:', email);
        return res.status(401).json({ msg: "User does not exist" });
      }
  
      const user = results[0];

      if (user.PASSWORD !== password) {
        console.log('Password mismatch:', user.PASSWORD, password);
        return res.status(401).json({ msg: "Invalid password" });
      }

      res.cookie('jwt', createToken(user.SCHEMANAME, user.USERID), {
        maxAge: maxAge, 
        secure: true,
        sameSite: "None",
      });

      global.SCHEMANAME = user.SCHEMANAME;
      console.log('Global SCHEMANAME set:', global.SCHEMANAME);
      console.log('Login successful:', user);

      return res.status(200).json({
        msg: "Welcome, user",
        user
      });
    });
  };
  

exports.editUser = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, email } = req.body; 

     
        const updatedUser = { name, email };

       
        connection.query('UPDATE usermaster SET ? WHERE id = ?', [updatedUser, id], (error, result) => {
            if (error) {
                console.error('Error updating user:', error);
                return res.status(500).send({ error: 'Internal Server Error' });
            }

            
            if (result.affectedRows === 0) {
                return res.status(404).send({ error: 'User not found' });
            }

         
            res.status(200).send({ msg: 'User updated successfully', updatedUser });
        });
    } catch (error) {
        console.error('Error editing user:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};
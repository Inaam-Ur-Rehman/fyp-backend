const con = require('../lib/db');
const express = require('express');
module.exports = {
    getUsers: function (req, res) {
        con.query('SELECT * FROM Users', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    },
    getUser: function (req, res) {
        con.query('SELECT * FROM Users WHERE USER_ID = ?', [String(req.params.id)], (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);

        });
    }
}
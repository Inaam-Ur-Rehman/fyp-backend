const con = require('../lib/db');
const express = require('express');
module.exports = {
    getSales: function (req, res) {
        con.query('SELECT * FROM Sales', (err, rows) => {

            if (err) res.status(500).send(err);

            res.status(200).send(rows);
        });
    }
}
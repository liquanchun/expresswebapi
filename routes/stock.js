/**
 * Created by liqc on 2017-03-16.
 */
var express = require('express');
var router = express.Router();
var orm = require("orm");
var query=require("./mysql.js");

router.get('/', function(req, res, next) {
    let sqlstring = "select * from hangyecode";
    query(sqlstring, function (err, vals, fields) {
        if (err && err.code !== 'ER_DUP_ENTRY')  res.send(err + sqlstring);
        res.send(JSON.stringify(vals));
    });
});

router.get('/hangyezhishu', function(req, res, next) {
    let sqlstring = "select * from hangyezhishu";
    query(sqlstring, function (err, vals, fields) {
        if (err && err.code !== 'ER_DUP_ENTRY')  res.send(err + sqlstring);
        res.send(JSON.stringify(vals));
    });
});

router.get('/hangyezhishu/:date', function(req, res, next) {
    console.log(req.params.date);
    let sqlstring = `select * from hangyezhishu where record_date='${req.params.date}' and business_type='行业资金'`;
    query(sqlstring, function (err, vals, fields) {
        if (err && err.code !== 'ER_DUP_ENTRY')  res.send(err + sqlstring);
        res.send(JSON.stringify(vals));
    });
});
module.exports = router;
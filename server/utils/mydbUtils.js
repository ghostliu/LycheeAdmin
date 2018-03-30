var mysql = require('mysql');
var config = require('./config');

var pool = mysql.createPool(config);

//sql语句自由查询
var querySql = function(sql, params, callback) {
    if (!sql) {
        callback();
        return;
    }
    // params format 
    // {id:123,name:'123'}
    console.log('[connect sql before]-:', sql);
    if (params != "" || params != null) {
        for (var item in params) {
            sql += " where "+ item + "='" +  params[item] + "' ";
        }
    }
    console.log('[connect sql after]-:', sql);
    pool.query(sql, function(err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        };

        callback(null, rows, fields);
    });
}

var executeProcedure = function(procedure,params,callback) {
    
}

exports.config = config;
exports.querySql = querySql;
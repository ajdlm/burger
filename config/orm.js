var connection = require("./connection.js");

function objectToSql(object) {
    var array = [];

    for (var key in object) {
        array.push(key + "=" + object[key]);
    };

    return array.toString();
};

var orm = {
    getAll: function (tableName, callback) {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            };

            callback(result);
        });
    },

    addRow: function (tableName, columnNames, values, callback) {
        var queryString = "INSERT INTO " + tableName + " (" + columnNames.toString() + ") VALUES (?,?) ";

        connection.query(queryString, values, function (error, result) {
            if (error) {
                throw error;
            };

            callback(result);
        });
    },

    update: function (tableName, valueChange, condition, callback) {
        var queryString = "UPDATE " + tableName + " SET " + objectToSql(valueChange) + " WHERE " + condition;

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            };

            callback(result);
        });
    }
};

module.exports = orm;
var connection = require("./connection.js");

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

    addRow: function (tableName, values, callback) {
        var queryString = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?) ";

        connection.query(queryString, values, function (error, result) {
            if (error) {
                throw error;
            };

            callback(result);
        });
    },

    update: function (tableName, valueChange, condition, callback) {
        var queryString = "UPDATE " + tableName + " SET " + valueChange + " WHERE " + condition;

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            };

            callback(result);
        });
    }
};

module.exports = orm;
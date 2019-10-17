var orm = require("../config/orm.js");

var burger = {
    getBurgers: function(callback) {
        orm.getAll("burgers", function(result) {
            callback(result);
        });
    },

    addBurger: function(columnNames, values, callback) {
        orm.addRow("burgers", columnNames, values, function(result) {
            callback(result);
        });
    },

    eatBurger: function(valueChange, condition, callback) {
        orm.update("burgers", valueChange, condition, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;
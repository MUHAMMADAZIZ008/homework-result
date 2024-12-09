var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Database = /** @class */ (function () {
    function Database(T, user, password, host, port, database) {
        this.T = T;
        this.user = user;
        this.password = password;
        this.host = host;
        this.port = port;
        this.database = database;
    }
    Database.prototype.connect = function () {
        return "Connection to ".concat(this.database);
    };
    Database.prototype.disconnect = function () {
        return "Disconnected from ".concat(this.database);
    };
    Database.prototype.create = function (data) {
        var id = this.T.length + 1;
        this.T.push(__assign({ id: id }, data));
        return 'Created';
    };
    Database.prototype.read = function () {
        return this.T;
    };
    Database.prototype.update = function (id, data) {
        var index = this.T.findIndex(function (item) { return item.id === id; });
        if (index !== -1) {
            this.T[index] = __assign(__assign({}, this.T[index]), data);
            return 'Data is updated';
        }
        return 'Data not found';
    };
    Database.prototype.delete = function (id) {
        var index = this.T.findIndex(function (item) { return item.id === id; });
        if (index === -1) {
            return 'User not found';
        }
        this.T.splice(index, 1);
        return 'Data is deleted';
    };
    return Database;
}());
var MongoDB = /** @class */ (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB(T, user, password, host, port, database) {
        return _super.call(this, T, user, password, host, port, database) || this;
    }
    return MongoDB;
}(Database));
var users = [];
var connection1 = new MongoDB(users, 'mongodb', 'qwer', 'localhost', 5432, 'market');
connection1.create({
    username: 'Muhammadaziz',
    age: 16
});
console.log(connection1.read());
console.log(connection1.update(1, {
    username: "aziz"
}));
console.log(connection1.read());

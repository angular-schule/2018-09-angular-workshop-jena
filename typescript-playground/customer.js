"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        var self = this;
        var callback = function () {
            return 'ID ist \n' + self.id + '!';
        };
        var callback1 = function () { return "Die ID\nist " + _this.id + "!"; };
        return callback1();
    };
    return Customer;
}());
exports.Customer = Customer;
exports.foo = 'hallo';
//# sourceMappingURL=customer.js.map
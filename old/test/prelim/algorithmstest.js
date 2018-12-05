var assert = require('assert');

var x = 1;

var y = function (x) {
    return x + x;
}

function calculator(x, y) {
    return y(x);
}

var passable = function (operand) {
    return operand + operand;
}
var trap = passable;
describe('Basic Mocha String Test', function () {
    it('should return 2', function () {
        assert.equal(y(x), 2);
    });
    it('should return 2', function () {
        assert.equal(calculator(x, y), 2);
    });
    it('should return 2', function() {
        assert.equal(calculator(x, function (operand) {
            return operand + operand
        }), 2);
    });
    it('should return 2', function () {
        assert.equal(calculator(x, passable), 2);
    });
    it('should return 2', function () {
        assert.equal(calculator(x, trap), 2);
    });

});


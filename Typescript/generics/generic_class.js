var ArithmeticOperation = /** @class */ (function () {
    function ArithmeticOperation() {
    }
    ArithmeticOperation.prototype.add = function (x, y) {
        return x + y;
    };
    ArithmeticOperation.prototype.addString = function (x, y) {
        return x + y;
    };
    return ArithmeticOperation;
}());
var arithmeticOperation = new ArithmeticOperation();
console.log(arithmeticOperation.add(5, 10));
console.log(arithmeticOperation.addString("Ra", "hul"));
// generic constraints
var ConstraintForAdd = /** @class */ (function () {
    function ConstraintForAdd() {
        this.addNumbers = function (x, y) {
            return x + y;
        };
    }
    return ConstraintForAdd;
}());
var constraintForAdd = new ConstraintForAdd();
var result = constraintForAdd.addNumbers(5, 6);
console.log(result);

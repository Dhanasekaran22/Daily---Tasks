var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this._age = 0;
        this.name = name;
        this._age = age;
    }
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printName = function () {
        console.log(this.name);
    };
    return Employee;
}());
var employee = new Employee("Rahul", 20);
employee.printName();
// console.log(employee.age);

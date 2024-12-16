var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this._age = 0;
        this.name = name;
        this._age = age;
    }
    Object.defineProperty(Employee.prototype, "age", {
        get: function () {
            // return _age;         // we can't directly use the variable name. In class we must use the this keyword  
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
console.log(employee.age);
//modifying the data using setter
employee.age = 22;
console.log("By using the Setter -", employee.age);

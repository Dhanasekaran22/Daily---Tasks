// it works based on the instance(object of the class)
// if we create the static variable we cant use the this keyword
// this keyword denoted the current object
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        // this._name=name;             // if we use the this keyword it shows error
        this._age = 0;
        Employee._name = name; // instead of using this keyword we use the instance of the class 
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
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printName = function () {
        console.log(Employee._name);
    };
    return Employee;
}());
var employee = new Employee("Rahul", 20);
var employee2 = new Employee("Vijay", 21);
employee2.printName();

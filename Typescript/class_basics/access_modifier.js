// public - used anywhere
// private - use the private variables inside the class 
//protected -  use the protected variables inside the class and their derived class
var Students = /** @class */ (function () {
    function Students(name, value) {
        this._name = name;
        this._age = value;
        console.log(this._name, this._age);
    }
    Object.defineProperty(Students.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
var students = new Students("Rahul", 20);
// console.log(students._age);      // we cant access the private variable outside the class

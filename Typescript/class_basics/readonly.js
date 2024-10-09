var Students = /** @class */ (function () {
    function Students(name, value) {
        this._name = name;
        this._age = value;
    }
    Object.defineProperty(Students.prototype, "age", {
        // set age(value){         // if we try to assign the value of the readonly property it shows error
        //     this._age=value;    // we can only assign the value twice of the readonly property 
        // }                       // And also we can acces the readonly property outside the class also 
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Students;
}());
var students = new Students("Rahul", 20);
console.log(students.age, students.name);
// students.name="Dhanasekaran M"  //it shows error because we didnt write the code on setter so it takes as readonly property

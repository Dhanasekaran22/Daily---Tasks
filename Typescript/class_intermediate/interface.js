/*  (or)

 interface Manager{
    experience:number;
}

type Manager_=Employee & Manager;

*/
var Fresher = /** @class */ (function () {
    function Fresher() {
        this.userId = 398;
    }
    Fresher.prototype.getSalary = function (salary) {
        return salary;
    };
    return Fresher;
}());
var ManagerDetails = /** @class */ (function () {
    function ManagerDetails(names) {
        this.name = "Manager"; // we can also assign the value to the readonly name 
        this.userId = 400; // because we can assign the value once in a separate class
        this.experience = 2;
        this.name = names;
    }
    ManagerDetails.prototype.getSalary = function (salary) {
        var extraPay = (salary / this.experience) / 2;
        return salary + extraPay;
    };
    ManagerDetails.prototype.getEmployeeNames = function (name) {
        return name;
    };
    return ManagerDetails;
}());
var fresher = new Fresher();
var manager = new ManagerDetails("Rahul");
console.log("------Fresher Details------");
console.log("Name: ", fresher.name = "Fresher");
console.log("User ID: ", fresher.userId);
console.log("Salary: ", fresher.getSalary(20000));
console.log("------Manager Details------");
console.log("Name: ", manager.name);
console.log("User ID: ", manager.userId);
console.log("Salary: ", manager.getSalary(20000));
console.log(manager.getEmployeeNames(fresher.name));

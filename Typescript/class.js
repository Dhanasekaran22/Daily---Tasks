var Employee = /** @class */ (function () {
    function Employee() {
        this.a = 10; // let a=10; it shows error because (let, const are block scope)(var are function scope) but in that 
        this.b = 20; // In a class, properties are typically initialized in the constructor, which is automatically called 
        // when a new instance of the class is created
        this.employeeName = "Inside the class";
    }
    Employee.prototype.print = function () {
        console.log(this.employeeName); // this refers the curent object(current instance) , if we didnt use the this we can't acces the 
        //  outside property of the function
    };
    Employee.prototype.specialPrint = function () {
        console.log("Special Name -", this.employeeName);
    };
    return Employee;
}());
var employee = new Employee();
employee.employeeName = "First-Object";
employee.print();
employee.specialPrint();
var employee2 = new Employee();
employee2.employeeName = "Second-Object";
employee2.print();
employee2.specialPrint();

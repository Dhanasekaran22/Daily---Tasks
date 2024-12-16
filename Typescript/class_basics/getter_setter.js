var StudentDetails = /** @class */ (function () {
    function StudentDetails() {
        this.originalName = "Dhanasekaran M";
    }
    Object.defineProperty(StudentDetails.prototype, "studentName", {
        get: function () {
            return this.originalName;
        },
        set: function (name) {
            this.originalName = name;
            // console.log(this.originalName);
        },
        enumerable: false,
        configurable: true
    });
    return StudentDetails;
}());
var studentDetails = new StudentDetails();
console.log(studentDetails.studentName);
//by changing the value , using setter
studentDetails.studentName = "Rahul";
console.log(studentDetails.studentName);

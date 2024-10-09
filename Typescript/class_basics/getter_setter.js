var StudentDetails = /** @class */ (function () {
    function StudentDetails() {
        this.originalName = "rahul M";
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
studentDetails.studentName = "Rahul";
console.log(studentDetails.studentName);

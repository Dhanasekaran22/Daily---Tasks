var students = [];
students[0] = "Vijay";
students[1] = "Ajith";
students[2] = "Kamal";
students.push("Rajini");
students.pop();
console.log(students);
var numb = [1, 3, 5, 7];
var double = numb.map(function (e) { return e * 2; });
console.log(double);
var mixed = ["name1", 1, "name2", 2];
console.log(mixed);
// console.log(typeof(mixed));
var mixed_;
mixed_ = ["name1", "name2"];
console.log(typeof (mixed_));
var circles = [20, 30, 40];
var areas = [];
var area = 0;
for (var i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);
var array;
array = [789, 87878, "rahul", 8787];
console.log(array);

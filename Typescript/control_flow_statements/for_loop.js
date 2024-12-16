//for loop
var ranks = ["A", "B", "C"];
for (var i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}
//for each loop
var names = ["Rahul", "Arul", "Aswin", "balaji"];
names.forEach(function (name, nam) {
    console.log(name, nam);
});
var circles = [20, 30, 40];
var areas = [];
var area = 0;
for (var _i = 0, circles_1 = circles; _i < circles_1.length; _i++) {
    var element = circles_1[_i];
    area = Math.floor(Math.PI * element * element);
    areas.push(area);
}
console.log(areas);

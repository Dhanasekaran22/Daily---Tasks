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
for (var i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);

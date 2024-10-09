var _a;
var a = 10;
var b = 20;
_a = [a, b], b = _a[0], a = _a[1];
console.log("a =", "".concat(a), "b =", "".concat(b));
var users = [
    { id: 1, name: "aaa", age: 22 },
    { id: 2, name: "bbb", age: 22 },
    { id: 3, name: "ccc", age: 23 }
];
users.forEach(function (_a) {
    var id = _a.id, name = _a.name;
    console.log("Id: ".concat(id, ", Name: ").concat(name));
});

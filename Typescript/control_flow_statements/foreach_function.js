var a = [1, 2, 3, 3, 4];
a.forEach(function (n) {
    console.log(n);
});
a.forEach(function (n, index) {
    console.log(n, index);
});
a.forEach(function (n, index, originalArray) {
    console.log(n, index, originalArray);
});

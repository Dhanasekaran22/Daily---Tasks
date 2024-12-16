/*
const toArray=(x:any,y:any,z:any)=>{
    return [x,y,z];                         //this is not the best practice so we go for generics
}                                           // we can reuse the code in generics in a best way compare to any
                                            // any is also a reusable code
const numberArray=toArray(5,10,15);
console.log(numberArray);

*/
//generics
//single type
var toArrayGeneric = function (x, y, z) {
    return [x, y, z];
};
console.log(toArrayGeneric(1, 2, 3));
// console.log(genericArray);
// console.log(typeof(genericArray));
// multiple type
var printValue = function (a, b, c, d) {
    console.log("a is ".concat(typeof (a), " b is ").concat(typeof (b), " c is ").concat(typeof (c)));
};
printValue("Rahul", 7, true, "demo");

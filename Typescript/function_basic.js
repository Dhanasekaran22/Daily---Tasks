function test() {
    if (true) {
        var message = "true";
        var mess = "neutral";
        message = "false";
        return message;
    }
}
console.log(test());
function getProduct(id) {
    return {
        val: id,
        name: "Awesome gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(1);
console.log("the product ".concat(product.name, " costs $").concat(product.price));
var na;
na = 'albd1234';
console.log(typeof (na)); 

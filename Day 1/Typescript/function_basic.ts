
function test(){
    if(true){
        let message:string="true";
        var mess:string="neutral";
        message="false";
        return message;
    }
}
console.log(test());



function getProduct(id) {
    return {
        val: id,
        name: `Awesome gadget ${id}`,
        price: 99.5
    }
}


const product=getProduct(1);
console.log(`the product ${product.name} costs $${product.price}`);


let na;
na='albd1234';
console.log(typeof(na));


class Product{
    protected _productName;string;              //  When using getters/setters where the internal state (e.g., _productName) is handled   
    protected _price:number;                    //  differently from the public API(e.g., a getter method get productName())
 
    
    constructor( name:string,price:number){

        this._productName=name;
        this._price=price;
        console.log("constructor Called");
    }
    
    displayDetails():string{
        return `Product: ${this._productName} Price: ${this._price} `;
    }
     applyDiscount(value:number){
        return `The discount for ${this._productName} is ${this._price-value}`;
     }
}

class Electronics extends Product{
    protected _brand:string;
    protected _RAM:string;

    constructor(name:string,price:number,brand:string,RAM:string){
        super(name,price);
        this._brand=brand;
        this._RAM=RAM;
        
    }

    displayDetails(): string {
        return `Product: ${this._productName}, Price: ${this._price}, Brand: ${this._brand}, RAM: ${this._RAM}`;
    }

}

class Clothing extends Product{
    protected _size:string;
    protected _material:string;

    constructor(name:string,price:number,size:string,material:string){
        super(name,price)
        this._size=size;
        this._material=material;
    }

    displayDetails():string {
        return `product: ${this._productName}, Price: ${this._price}, Size: ${this._size}, Material: ${this._material}`
    }
}

const products:Product[]=[
    new Electronics("laptop",29999,"HP","8GB"),
    new Clothing("Shirt",450,"L","Cotton")
];

console.log("---------Product Information---------");
products.forEach(productDetails=>{
    console.log(productDetails.displayDetails());
})

const laptop=products[0];
console.log(laptop.applyDiscount(1000));
console.log("------End of Product Information------");

 
 
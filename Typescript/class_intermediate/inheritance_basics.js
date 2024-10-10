var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._productName = name;
        this._price = price;
    }
    Product.prototype.displayDetails = function () {
        return "Product: ".concat(this._productName, " Price: ").concat(this._price, " ");
    };
    Product.prototype.applyDiscount = function (value) {
        return "The discount for ".concat(this._productName, " is ").concat(this._price - value);
    };
    return Product;
}());
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price, brand, RAM) {
        var _this = _super.call(this, name, price) || this;
        _this._brand = brand;
        _this._RAM = RAM;
        return _this;
    }
    Electronics.prototype.displayDetails = function () {
        return "Product: ".concat(this._productName, ", Price: ").concat(this._price, ", Brand: ").concat(this._brand, ", RAM: ").concat(this._RAM);
    };
    return Electronics;
}(Product));
var Clothing = /** @class */ (function (_super) {
    __extends(Clothing, _super);
    function Clothing(name, price, size, material) {
        var _this = _super.call(this, name, price) || this;
        _this._size = size;
        _this._material = material;
        return _this;
    }
    Clothing.prototype.displayDetails = function () {
        return "product: ".concat(this._productName, ", Price: ").concat(this._price, ", Size: ").concat(this._size, ", Material: ").concat(this._material);
    };
    return Clothing;
}(Product));
var products = [
    new Electronics("laptop", 29999, "HP", "8GB"),
    new Clothing("Shirt", 450, "L", "Cotton")
];
console.log("---------Product Information---------");
products.forEach(function (productDetails) {
    console.log(productDetails.displayDetails());
});
var laptop = products[0];
console.log(laptop.applyDiscount(1000));
console.log("------End of Product Information------");

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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.favVehicle = "Car";
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.vehicleName = function () {
        console.log("This is a ".concat(this.constructor.name));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, doors) {
        var _this = _super.call(this, make, model) || this;
        _this.doors = doors;
        return _this;
    }
    Car.prototype.displayDetails = function () {
        this.vehicleName();
        console.log("Car : ".concat(this.make, " ").concat(this.model, ",Doors : ").concat(this.doors));
    };
    return Car;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, hasSideCar) {
        var _this = _super.call(this, make, model) || this;
        _this.hasSideCar = hasSideCar;
        return _this;
    }
    Motorcycle.prototype.displayDetails = function () {
        this.vehicleName();
        console.log("Motorcycle : ".concat(this.make, " ").concat(this.model, ", Has Sidecar : ").concat(this.hasSideCar));
        console.log("Favourite Vehicle : ".concat(this.favVehicle));
    };
    return Motorcycle;
}(Vehicle));
var car = new Car("Toyato", "camry", 4);
car.displayDetails();
var motorcycle = new Motorcycle("Harley-Davidson", "Street 750", false);
motorcycle.displayDetails();

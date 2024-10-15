abstract class Vehicle{
    protected make:string;
    protected model:string;

    constructor(make:string,model:string){
        this.make=make;
        this.model=model;
    }

    protected favVehicle="Car";
    abstract displayDetails():void;

    vehicleName():void{
        console.log(`This is a ${(this.constructor as any).name}`)
    }
}

class Car extends Vehicle{
    protected doors:number;
    
    constructor(make:string,model:string,doors:number){
        super(make,model);
        this.doors=doors;
    }

    displayDetails(): void {
        this.vehicleName();
        console.log(`Car : ${this.make} ${this.model},Doors : ${this.doors}`);
    }
}

class Motorcycle extends Vehicle{
    
    private hasSideCar:boolean;

    constructor(make:string,model:string,hasSideCar:boolean){
        super(make,model);
        this.hasSideCar=hasSideCar;
    }

    displayDetails(): void {
        this.vehicleName();
        console.log(`Motorcycle : ${this.make} ${this.model}, Has Sidecar : ${this.hasSideCar}`);
        console.log(`Favourite Vehicle : ${this.favVehicle}`)
    }
}


const car=new Car("Toyato","camry",4);
car.displayDetails();

const motorcycle=new Motorcycle("Harley-Davidson","Street 750",false);
motorcycle.displayDetails();


class Employee{
    name:string;
    private _age=0; 
    
     constructor(name:string,age:number){
        this.name=name;
        this._age=age;
        
    }

    set age(value:number){
        this._age=value;
    }

    get age(){

        // return _age;         // we can't directly use the variable name. In class we must use the this keyword  

        return this._age;
    }


    printName(){
        console.log(this.name);
        
    }

}

const employee=new Employee("Rahul",20)
employee.printName();
 console.log(employee.age);
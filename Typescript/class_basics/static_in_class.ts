// it works based on the instance(object of the class)
// if we create the static variable we cant use the this keyword
// this keyword denoted the current object

// belongs to the class not an intance 

class Employee{
    static  _employeeName:string;
    private _age:number=0; 
    
     constructor(name:string,age:number){
        // this._name=name;             // if we use the this keyword it shows error

        Employee._employeeName=name;            // instead of using this keyword we use the instance of the class 
        this._age=age;
        
    }

    set age(value:number){
        this._age=value;
    }

    get age(){
        return this._age;   
    }

     static get employeeName(){
        return this.employeeName;
        
    }
    printName(){
        console.log(Employee._employeeName);
    }
   

}

const employee=new Employee("Rahul",20)
const employee2=new Employee("Vijay",21)
console.log(Employee.employeeName);         //console.log(employee.employeeName); if we execute this means this shows error


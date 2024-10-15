interface Employee{                         //type Employee={               
    readonly name?:String;
    userId:number;
    getSalary(salary:number):number;
}

interface Manager extends Employee{
    experience:number;
}


/*  (or)

 interface Manager{
    experience:number;
}

type Manager_=Employee & Manager;

*/

class Fresher implements Employee{
    name:string;
    userId=398;
    
    getSalary(salary): number {
        return salary;
    }
    
}

class ManagerDetails implements ManagerDetails{   //class ManagerDetails implements Manager_{
   
    constructor(names:string) {
    this.name=names;
   }

    name="Manager";                         // we can also assign the value to the readonly name 
    userId=400;                             // because we can assign the value once in a separate class

    experience:number=2;

    getSalary(salary: number): number {
        const extraPay=(salary/this.experience)/2;
        return salary+extraPay;
    }

    getEmployeeNames(name){
        return name;
    }
}

const fresher=new Fresher();
const manager =new ManagerDetails("Rahul");
console.log("------Fresher Details------");

console.log("Name: ",fresher.name="Fresher");
console.log("User ID: " ,fresher.userId);
console.log("Salary: ",fresher.getSalary(20000));

console.log("------Manager Details------");
console.log("Name: ",manager.name);
console.log("User ID: " ,manager.userId);
console.log("Salary: ",manager.getSalary(20000));

console.log(manager.getEmployeeNames(fresher.name));


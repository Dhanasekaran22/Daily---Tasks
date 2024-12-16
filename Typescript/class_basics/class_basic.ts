class Employee{
    a=10;                       // let a=10; it shows error because (let, const are block scope)(var are function scope) but in that 
    b=20;                       // In a class, properties are typically initialized in the constructor, which is automatically called 
                                // when a new instance of the class is created
    
    // constructor(){
    //     console.log("default constructor");
    // }     

    employeeName="Inside the class";
    print(){                                  // here we didn't use the function keyword if we use the function keyword it shows error
        console.log(this.employeeName);       // "this" refers the current object(current instance) , if we didn't use the this we can't acces the 
                                              //  outside property of the function
    }

    specialPrint(){
        console.log("Special Name -",this.employeeName);
    }
    
}

const employee=new Employee();
employee.employeeName="First-Object";
employee.print();
employee.specialPrint();

let employee2=new Employee();
employee2.employeeName="Second-Object";
employee2.print()
employee2.specialPrint();
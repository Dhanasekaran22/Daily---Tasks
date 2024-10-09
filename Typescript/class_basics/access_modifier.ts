// public - used anywhere
// private - use the private variables inside the class 
//protected -  use the protected variables inside the class and their derived class


class Students{
    _name:string;
    private _age:number;
   
   constructor(name:string,value:number){
       this._name=name;
       this._age=value;
       console.log(this._name,this._age);
   }

//    set age(value){        
//        this._age=value;    
//    }                       

//     get age(){
//        return this._age;
//    }

   
}

const students=new Students("Rahul",20);

// console.log(students._age);      // we cant access the private variable outside the class




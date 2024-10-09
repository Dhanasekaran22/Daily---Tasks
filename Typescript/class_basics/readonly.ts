class Students{
     _name:string;
     readonly _age:number;
    
    constructor(name:string,value:number){
        this._name=name;
        this._age=value;
    }

    // set age(value){         // if we try to assign the value of the readonly property it shows error
    //     this._age=value;    // we can only assign the value twice of the readonly property 
    // }                       // And also we can acces the readonly property outside the class also 

    get age(){
        return this._age;
    }

    get name(){
        return this._name;
    }

    
}

const students=new Students("Rahul",20);

console.log(students.age,students.name);

// students.name="Dhanasekaran M"  //it shows error because we didnt write the code on setter so it takes as readonly property



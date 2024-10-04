
function printPerson(name:string="Default_name",isMajor?:boolean,age?:number){
    console.log(name,isMajor,age);
}

type Employee={
    firstName:string,
    lastName:string,
    age:number,
    isMajor:boolean
};

const person:Employee={
    firstName:"Franklin",
    lastName:"Anto",
    age:23,
    isMajor:true
}
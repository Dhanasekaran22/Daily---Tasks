
function printPerson(name:string="Default_name",isMajor?:boolean,age?:number){
    console.log(name,isMajor,age);
}

type Employee={
    firstName:string | null,
    lastName:string | null,
    age:number,
    isMajor:boolean
};

const person:Employee={
    firstName:"Franklin",
    lastName:"Anto",
    age:23,
    isMajor:true
}
/*
function getFullName(firstName:string,lastName:string):string{           // it shows error because we assigned only string to the firstName and
    const fullName=firstName+" "+lastName;                                  lastName but in that type we assigned string | null to the fname and 
    return fullName;                                                        lname to over come this we asssined typecast(as) keyword
}

getFullName(person.firstName ,person.lastName);

*/

function getFullName(firstName:string,lastName:string):string{
    const fullName=firstName+" "+lastName;
    return fullName;
}

console.log(getFullName(person.firstName as string,person.lastName as string));


// rest parameter

function test(...names:string[]){   // ... is called spread operator
    console.log(names);
}

test("rahul","arul","balaji","vijay");
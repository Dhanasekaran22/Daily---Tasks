type Employee=
{
    fname:string,
    lname:string
};
var person={
    fname:"M",
    lname:"Rahul"
};

const fullNames=function(){
    console.log(person.fname+" "+person.lname);
}

fullNames();
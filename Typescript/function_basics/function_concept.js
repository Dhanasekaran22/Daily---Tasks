function printPerson(name, isMajor, age) {
    if (name === void 0) { name = "Default_name"; }
    console.log(name, isMajor, age);
}
var person = {
    firstName: "Franklin",
    lastName: "Anto",
    age: 23,
    isMajor: true
};

/*
function getFullName(firstName:string,lastName:string):string{           // it shows error because we assigned only string to the firstName and
    const fullName=firstName+" "+lastName;                                  lastName but in that type we assigned string | null to the fname and
    return fullName;                                                        lname to over come this we asssined typecast(as) keyword
}

getFullName(person.firstName ,person.lastName);

*/

function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}
console.log(getFullName(person.firstName, person.lastName));

// rest parameter
function test() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log(names);
}
test("rahul", "arul", "balaji", "vijay");

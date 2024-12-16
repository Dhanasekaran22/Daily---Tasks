type Personal={
    name:string,
    age:number
};

type Contact={
    email:string,
    phone:number
};

// type Canditates =Personal&Contact;  this is also valid

let canditate:Personal & Contact={
    name:"rahul",
    age:22,
    email:"abc@gmail.com",
    phone:87787
};
console.log(canditate);

// string literal types

type color= "red"|"Green"|"Blue";

let chooseRGB:color="Blue";     // let chooseRGB:color="yellow";(error)
console.log(chooseRGB);

function setDirection(direction:"up"|"Down"|"Left"|"Right"){
    console.log(`The Direction is ${direction}`);
}

setDirection("Down");           //setDirection("bottom"); shows error
// type Canditates =Personal&Contact;  this is also valid
var canditate = {
    name: "rahul",
    age: 22,
    email: "abc@gmail.com",
    phone: 87787
};
console.log(canditate);
var chooseRGB = "Blue"; // let chooseRGB:color="yellow";(error)
console.log(chooseRGB);
function setDirection(direction) {
    console.log("The Direction is ".concat(direction));
}
setDirection("Down"); //setDirection("bottom"); shows error

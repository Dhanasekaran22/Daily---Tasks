//Enumeration
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
;
console.log(Direction[2]);
console.log(typeof (Direction));
var Months;
(function (Months) {
    Months[Months["january"] = 0] = "january";
    Months[Months["february"] = 1] = "february";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
})(Months || (Months = {}));

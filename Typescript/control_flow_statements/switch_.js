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
function isSummer(parameter) {
    var itIsSummer;
    switch (parameter) {
        case (Months.June):
        case (Months.July):
            itIsSummer = true;
            break;
        default:
            itIsSummer = false;
            break;
    }
    return itIsSummer;
}
console.log(isSummer(Months.June));

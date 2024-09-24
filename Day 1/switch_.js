var Month;
(function (Month) {
    Month[Month["january"] = 0] = "january";
    Month[Month["february"] = 1] = "february";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
})(Month || (Month = {}));
function isSummer(parameter) {
    var itisSummer;
    switch (parameter) {
        case (Months.June):
        case (Months.July):
            itisSummer = true;
            break;
        default:
            itisSummer = false;
            break;
    }
    return itisSummer;
}
console.log(isSummer(Months.June));

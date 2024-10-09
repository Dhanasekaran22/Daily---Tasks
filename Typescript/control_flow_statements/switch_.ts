enum Months{
    january, february, March, April, May, June, July
}
function isSummer(parameter:Months):boolean{
    let itisSummer:boolean;
    switch(parameter){
        case(Months.June):
        case(Months.July):
            itisSummer=true;
            break;
        default:
            itisSummer=false;
            break;
    }
    return itisSummer;
    }
console.log(isSummer(Months.June));
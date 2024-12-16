enum Months{
    january, february, March, April, May, June, July
}
function isSummer(parameter:Months):boolean{
    let itIsSummer:boolean;
    switch(parameter){
        case(Months.June):
        case(Months.July):
            itIsSummer=true;
            break;
        default:
            itIsSummer=false;
            break;
    }
    return itIsSummer;
    }
console.log(isSummer(Months.June));
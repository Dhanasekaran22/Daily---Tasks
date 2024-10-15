interface toAssignValue<T, U> {
    name: T,
    userId: U
}

let assignValue: toAssignValue<string, number> = {
    name: "Rahul",
    userId: 321
}
console.log(assignValue);
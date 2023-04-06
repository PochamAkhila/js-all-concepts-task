let myArray = ["html", "css", 20, "postman", true, 2.50, null];

let myArrayAndarray = [...myArray, "mongodb",false,"javascrpt"];

console.log(myArrayAndarray);

const array = [1, 2, 3];
const arr = [4,5,'hi'];
const numbers = [...array, ...arr];
console.log(numbers)

const a = {
    id: 1,
    name: "Motivity",
    locat: "Dallas center",
    year: 2009
}

const b = {
    id1: 2,
    nam: "Motivitylabs",
    loc: "raidurg",
    yea: 2015
}

const updateDetails = {...a, ...b}
console.log(updateDetails)

//rest operator
function add(...input){
    var sum = 0;
    for(let item of input){
        sum += item;
    }
console.log(sum);
}
add(1,56,78);
add(345,654,89,2,4,5,8,33)

//or 
function sum(...args){
    let s = 0;
    for(let i of args)
        s += i;
        return s;
    }

let result = sum(34,6,7)
console.log(result);
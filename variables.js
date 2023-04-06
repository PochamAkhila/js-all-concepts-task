// using let keyword
var x;
x = 10;
console.log(x);

x = 300;
console.log(x);

x = "Hello";
console.log(x);

var x = 20; //redeclaring the x again
console.log(x);

// using var keyword
var y = 20;
console.log(y);

y = 500;
console.log(y);

y = "Laptop";
console.log(y);

// multiple declarations
let Value = "hai", num = 1, User = "Akhila";
console.log(Value,User,num);


n = 5;
console.log(n)

// using const keyword
const z = 50;
console.log(z);

// z = 1000;
// console.log(z);

// z = "i am akhila";
// console.log(z);

//block scope
// {
//     let a = 10;
// }
// console.log(a) //reference error

{
    var b = 20000;
}
console.log(b);
// {
//     const c = 30;
// }
// console.log(c); //reference error

// var xd;
// console.log(xd); //undefined

//console.log(k);//not defined

//functional scope
// function res(){
//     var g = 100;
// }
// res();
// console.log(g);//error not defined

function c(){
    var g = 100;
    console.log(g);
}
c();

function k(){
    let g = 200;
    console.log(g);
}
k();

function s(){
    const g = 300;
    console.log(g);
}
s();

// function n(){
//     let m = 200;
// }
// console.log(m); //error m not defined
// n();

// function t(){
//     const g = 300;
// }
// t();
// console.log(g); //error g not defined

let gd = 500;
function out(){
    console.log(gd);
}
out()
console.log(gd) //global

var gdh = 'hello';
function outvar(){
    console.log(gdh);
}
outvar()
console.log(gdh) //global

const mn = "akhila";

function ou(){
    console.log(mn);
}
ou()
console.log(mn)


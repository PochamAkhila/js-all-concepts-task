//length
let x = "my name is akhila from motivity labs";
console.log(x.length);

//slice
console.log(x.slice(5,15))

console.log(x.slice(-12))//starts from end 

//substring
console.log(x.substring(3,8))

console.log(x.substr(3,8))

//replace
console.log(x.replace("akhila","Akhi"));

//replaceAll
console.log(x.replaceAll("m","V"))

//uppercase
console.log(x.toUpperCase());

//lowercase
console.log(x.toLowerCase());

//concat
let y = " i am new added changes";
console.log(x.concat(y));

let t = "hai" + " " + "motivity";
console.log(t);

//trim will remove whitespaces
let z = "     i am new     ";
console.log(z.trim());
console.log(z.length)

//trimstart will remove white spaces from the start of the string
let xa = "     i am new     ";
console.log(xa.trimStart());
console.log(xa.length)

//trimEnd will remove at end
let av = "     i am new   ";
let out = av.trimEnd();
console.log(out.length)

//charAt is returns a specified index
console.log(y.charAt(6));

//charCodeAt is return a unicode of character utf-16
console.log(y.charCodeAt(6))

//split 
console.log(y.split(""))
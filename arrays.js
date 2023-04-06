//let arr = new array();//creates a empty array

//let myArr = []; // creates a empty array

let myArray = ["html", "css", 20, "postman", true, 2.50, null];

console.log(myArray[4]);//true

console.log(myArray.length);//7

console.log(myArray[myArray.length - 1])//null

console.log(myArray.length - 1);//6

myArray[1] = "JavaScript"; //update a value
console.log(myArray)

console.log(myArray.pop())//removing end of a value

myArray.push(1000);
console.log(myArray);//add an element at the end of an array

console.log(myArray.shift());//removes element at the starting of array

myArray.unshift("mongo");
console.log(myArray) //adds elements at the start of the array

// iteration of array using for loop
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

//using for of
for (let item of myArray) {
    console.log(item)
}

//for in using indexes print
for (let item in myArray) {
    console.log(item)
}

//for in using elements print
for (let item in myArray) {
    console.log(myArray[item])
}

//splice method
console.log(myArray)

let b = myArray.splice(1, 1)
console.log(b)
console.log(myArray)

// filter method
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);

const resu = words.filter(item => item.length > 3);
console.log(resu);

//to check even numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
    if (number % 2 == 0)
        return true;
    else
        return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

//age greater than 18
const ages = [32, 33, 16, 40];
const r = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

//concat method
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = [1, 2, 3];
const array4 = array1.concat(array2, array3);
console.log(array4);

//find method
const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

//for each method
const arra = ['a', 'b', 'c'];
arra.forEach(element => console.log(element));

//map method
const arr = [1, 4, 9, 16];

// Pass a function to map
const Resmap = arr.map(x => x * 2);
console.log(Resmap); //[1,8,18,32]

const numb = [1, 4, 9];
const roots = numb.map((num) => Math.sqrt(num));
console.log(roots); //[1,2,3]

//reduce method
let Ab = [1,23,56,78,90];

let sum = Ab.reduce((num, total)=>{
    return total + num ;
})
console.log(sum);

let sum1 = Ab.reduce((num, total)=>{
    return total - num ;
})
console.log(sum1);

//sort method
const months = ['Nov', 'Jan', 'Feb', 'Dec'];
const aes= months.sort((a, b) => b - a);
console.log(aes)

const sorting = months.sort((a,b)=>{
    return b-a; //ascending order
})

console.log(months.sort())
console.log(sorting);

const sorting1 = months.sort();
console.log(sorting1)

const sort = months.sort((a,b)=>{
    return b-a;
})
console.log(sort);//descending order

//toString method
const arrays = [1, , ,2,'b','1sd'];
console.log(arrays.toString());

//slice method
let animals = ["ant","lion","tiger","dog","cat"];
console.log(animals.slice(2,5));

console.log(animals.slice(2));

console.log(animals.slice(-2))

//tostring method
console.log(animals.toString());

//sort method
const k = animals.sort((a,b)=>{
    return b-a;
})
console.log(k)

//slice method
const sl = animals.slice(1,3);
console.log(sl);


// // mix of values
// let arrays = ['Apple',
//     { name: 'John' },
//     true,
//     function () {
//         alert('hello');
//     }];

// console.log(arrays[1].name); // John

// console.log(arrays[3]); // hello

// let a = [1,2,3,5];
// console.log(a[a.length-1]);//5
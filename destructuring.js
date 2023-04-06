//object destructuring
let users =
{
    id: 1,
    name: "Motivity",
    locat: "Dallas center",
    year: 2009
};

const {id, name, locat, year } = users;

console.log(id);
console.log(year);

//array destructuring
const array = ['Motivity','Dallas center',2009];

const [nam, loc, yea] = array;

console.log(nam);
console.log(loc)


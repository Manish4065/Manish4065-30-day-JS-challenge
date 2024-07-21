// template literals

const name="manish"
const age=20
console.log(`person's name is ${name} and his age is ${age}`);

// multiline string using template literals
let multiLineString=`Hi! my name is Manish.
I'm from kushinagar`
console.log(multiLineString);


// array destructuring
const arr=[1,2,3,4]

let [firstValue, secondValue]=arr
console.log(firstValue,secondValue)

// object destructuring
let book={
    title: "organic chemistry",
    authorName: "SKM Sir",
    punlicationYear: 2012,
}

let {title, authorName}=book
console.log(title, authorName);

// use of spread operator
let newarr=[...arr, 5, 6, 7];
console.log(newarr);

// use of rest operator
let sumofarrayelement=0
function sum(...num){
    num.forEach(element => {
        sumofarrayelement+=element
    });
    return sumofarrayelement
}

console.log(sum(1,2,3,4,5));


// default parameter
function func(num1, num2=1) {
    return num1*num2;
}

console.log(func(4));

//object literals
let dogeName="duke"
let color="black"
let dogAge=6

// const bark=function() {
//     console.log("wolf wolf!")
// }
var barkWithName = function(){ 
    console.log('Woof Woof!!, I am '
    +this.dogeName+' and I am a '
    +this.dogAgeage+' years old, '
    +this.color+ ' coloured dog.Woof Woof!!'); 
} 

let anotherDog={dogeName, color, dogAge, barkWithName}
console.log(anotherDog);
anotherDog.barkWithName();


// enhanced object literals in javascript: create an object with
// computed property names based on variables and log the the object
// to console.

const key1="firstname"
const value1="Manish"

const key2="lastname"
const value2="Gupta"

// Create an object with computed property names
const obj={
    [key1]:value1,
    [key2]:value2,
}

console.log(obj);

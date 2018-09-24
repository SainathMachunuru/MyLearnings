console.log('welcome to js world');
//variables
let profile = 'sai';
console.log(profile);
//constants
const country = 'india';
console.log(country);

//primitive types
let name = 'sai';
let id = 1234;
let isApproved = false;
let firstName = undefined;
let lastName = null;

//Reference types
//Objects
let person = {
    name : 'sai',
    id : 1234
};
//Dot AND Bracket notations
person.name = 'msng';
person[id] = 4321;

console.log(person);
console.log(person[name]);
console.log(person.id);

//Arrays
let selectedColors = ['red','blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//functions
function greet(firstName,lastName){
    console.log('hello '+firstName+" "+lastName);
}
function calculate(number){
    return number*number;
}
greet('sainath','machunur');
console.log(calculate(2));



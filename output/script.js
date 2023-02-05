"use strict";
let playerName = 'Masrafi';
console.log(playerName);
// playerName = 34; not allowed for implicit data type
console.log(playerName);
// function parameter type checking
function multiply(a, b) {
    return a * b;
}
// console.log(multiply('Hi', 3))
// Array and object
let players = ['Sakib', 'Tamim',];
// players.push(10); //not allowed 
let custom = ['Sakib', 10, true, false];
custom.push('Tamim'); //allowed
//explicit type declaration
let a;
let b;
a = '20';
let c = []; //only string can be pushed in this array
c.push('hi');
let d; //only can be string or number
let e = []; //only can be array of string of number
// e.push(true) not allowed
// dynamic type or any type
let f; //any type
let g = [];
//function
let myFunc;
// myFunc = () => {
// }
const yourFunc = (a, b, c) => {
    console.log(a + b + c);
};
yourFunc('he', '5');
const userDetails = (id, user) => {
    console.log(id, user);
};
const sayHello = (user) => {
    console.log(user);
};
// function signature
let add;
add = (a, b) => {
    return a * b;
};
//class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a,
            this.country = c;
    }
    play() {
        console.log(this.name, this.age, this.country);
    }
}
const masrafi = new Player('Masrafit', 40, 'Bangladesh');
const playersArray = [];
//access modifiers

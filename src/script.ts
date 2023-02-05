let playerName = 'Masrafi';
console.log(playerName)
// playerName = 34;
console.log(playerName)

// function parameter type checking

function multiply(a: number, b: number) {
    return a * b
}
// console.log(multiply('Hi', 3))


// Array and object

let players = ['Sakib', 'Tamim',]
// players.push(10); //not allowed 
let custom = ['Sakib', 10, true, false]
custom.push('Tamim')//allowed

//explicit type declaration

let a: string;
let b: number;

a = '20'

let c: string[] = []; //only string can be pushed in this array

c.push('hi')

let d: string | number //only can be string or number

let e: (string | number)[] = []//only can be array of string of number
// e.push(true) not allowed





// dynamic type or any type

let f; //any type
let g: any[] = [];
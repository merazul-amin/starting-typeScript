let playerName = 'Masrafi';
console.log(playerName)
// playerName = 34; not allowed for implicit data type
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



//function

let myFunc: Function;
// myFunc = () => {

// }

const yourFunc = (a: string, b: string, c?: string) => {  //? optional params
    console.log(a + b + c);
}

yourFunc('he', '5')




//type aliases

type stringOfNum = string | number;
type userType = { name: string, age: number };

const userDetails = (id: stringOfNum, user: userType) => {
    console.log(id, user);
};

const sayHello = (user: userType) => {
    console.log(user);
}


// function signature

let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
    return a * b
};



//class

class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a,
            this.country = c
    }
    play() {
        console.log(this.name, this.age, this.country);
    }
}

const masrafi = new Player('Masrafit', 40, 'Bangladesh');

const playersArray: Player[] = [];




//access modifiers

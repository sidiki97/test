//const prompt = require('prompt-sync')();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });



function area_meters(l, w){
    
    return l*w;
}

// let l = prompt("Enter the length of the room in meters: ");

// let w = prompt("Enter the width of the room in meters: ");

let l = 2.0;
let w = 3.0;

readline.question('Enter length and width?', (l,w) => {
    console.log(`The area of the room is ${area_meters(l,w)} square meters.!`);

  });

console.log(`The area of the room is ${area_meters(l,w)} square meters.`);

let o = 1;

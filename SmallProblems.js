function isOdd(i){
    return Math.abs(i) % 2 != 0;
}


function area_meters(l, w){
    
    return l*w;
}

let l = prompt("Enter the length of the room in meters: ");

let w = prompt("Enter the width of the room in meters: ");



console.log(`The area of the room is ${area_meters(l,w)} square meters.`);
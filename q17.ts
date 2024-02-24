
// question no17

let guests = ["ayesha","aqsa","umar",""];

let cannotatten:string = "noreen";

let newguest = "bilal";

guests[guests.indexOf(cannotatten)] = newguest;

// add guest bigining of the array
guests.unshift("areeba")


// add guest middle of the array
let middleguest = "hareem";
let middleindex = guests.length / 2;
guests.splice(middleindex,0,middleguest)


// add guest last of the array
guests.push("misbah")

console.log("I can invite only two people to dinner")

while(guests.length>2){
    let removeguest = guests.pop()
     console.log(`Dear ${removeguest}, you are not invited to dinnnerg`)
}

guests.map((item) =>(
    console.log(`Dear ${item}, you are still invited to dinner`)
));

guests.pop()
guests.pop()
console.log(guests);




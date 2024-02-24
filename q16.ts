let guests = ["ayesha","aqsa","saqlain","ayat"];

let cannotatten:string = "ayat";

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

// send a message
guests.map((item) => console.log("welcom"  ,item+" "+  "we found a bigger dinner table! you inviteda dinner"));
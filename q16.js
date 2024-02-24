var guests = ["ayesha", "aqsa", "saqlain", "ayat"];
var cannotatten = "ayat";
var newguest = "bilal";
guests[guests.indexOf(cannotatten)] = newguest;
// add guest bigining of the array
guests.unshift("areeba");
// add guest middle of the array
var middleguest = "hareem";
var middleindex = guests.length / 2;
guests.splice(middleindex, 0, middleguest);
// add guest last of the array
guests.push("misbah");
// send a message
guests.map(function (item) { return console.log("welcom", item + " " + "we found a bigger dinner table! you inviteda dinner"); });

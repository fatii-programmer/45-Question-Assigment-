// Question no15
var guests = ["ayesha", "aqsa", "umar", "noreen"];
var cannotatten = "noreen";
console.log("".concat(cannotatten, " can not make it ,for dinner"));
var newguests = "bilal";
guests[guests.indexOf(cannotatten)] = newguests;
// guests[guests.indexOf(4)] = "bilal";
guests.map(function (item) { return console.log(item + " " + "you are invited to dinner"); });
// guests.map((item) => console.log(item +" "+ "you are invited to dinner")
// )

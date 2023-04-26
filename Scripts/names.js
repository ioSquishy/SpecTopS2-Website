const names = [
  "Daryl Anderson",
  "Sherrie Barrick",
  "Joe Bell",
  "David Berg",
  "Steve Brebner",
  "Marty Buswell",
  "Gary Cannell",
  "Tim Cantor",
  "Leslie Chapman",
  "Dennis Cleveland",
  "Dan Danielson",
  "Eddie Duarte",
  "Steve Estep",
  "Jeffrey Evans",
  "Lisa Falk",
  "Debra Fant",
  "Lee Fellenburg",
  "Debra Frederick",
  "Lybia Garrett",
  "Mike Graham",
  "Ken Grassi",
  "Dana Hayden",
  "Carl Heenan",
  "Patrick Isakson",
  "Diane Jarmon",
  "Kerry Kade",
  "Mark Kirpes",
  "Ken Krona",
  "Roger Kuhl",
  "Michael Langdon",
  "Danette Mandt",
  "Richard Mason",
  "Roy Mason",
  "Roxy McClure",
  "Rocky McGallian",
  "Karen McKay",
  "Deb Nelson",
  "Dirk Post",
  "Connie Ravers",
  "Doug Richards",
  "Kris Rosendahl",
  "Sue Stevens",
  "Sandy Stewart",
  "Jo Streets",
  "Theresa Thetford",
  "Paulette Tropiano",
  "Kathy Turnipseed",
  "Bruce Walmer",
  "Curt Wegner",
  "Gail Wentworth",
  "Donald Whiton",
  "Sue Williams",
  "Jim Willoughby",
  "Paul Wilson",
  "Joe Winski",
  "Sue Yadon",
  "Jackie Bjorkman",
  "Rand Chiarovano",
  "Richard Mead",
  "Ramonda Revis",
  "Kaare Gimse",
  "Lyle Pratt",
  "Joe Jackson",
  "Dorinda Klug",
  "Roxann Russell"]

var list1 = document.getElementById("namesList1");
var list2 = document.getElementById("namesList2");
var list3 = document.getElementById("namesList3");
var list4 = document.getElementById("namesList4");

//sort alphabetically
names.sort(function(a, b) {
  const aLastName = a.split(" ")[1];
  const bLastName = b.split(" ")[1];
  return aLastName.localeCompare(bLastName);
});

var cols = 4;
var namesPerCol = (names.length / cols).toFixed(0);
//first col
for (let i = 0; i < namesPerCol; i++) {
  list1.innerHTML += names[i] + "<br>";
}
//second col
for (let i = namesPerCol; i < namesPerCol*2; i++) {
  list2.innerHTML += names[i] + "<br>";
}
//third col
for (let i = namesPerCol*2; i < namesPerCol*3; i++) {
  list3.innerHTML += names[i] + "<br>";
}
//fourth col
for (let i = namesPerCol*3; i < names.length; i++) {
  list4.innerHTML += names[i] + "<br>";
}
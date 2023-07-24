async function getGoogleapiNames() {
  const apiKey = 'AIzaSyB4M2ZdOF3vYj9eJEgRT6bWW5mAXSLhh3E';
  const spreadsheetId = '1HJQmVQ1PkFNkMJ9npDVJhB63BtuwoNlkDUxWUic5Vn8';

  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1?key=${apiKey}`);
    const data = await response.json();
    const values = data.values;
    values.sort((a, b) => a[1].localeCompare(b[1]));
    const initNames = [];

    for (let nameIndex = 0; nameIndex < values.length; nameIndex++) {
        let name = values[nameIndex][0] + " " + values[nameIndex][1];
        initNames.push(name);
    }

    console.log("Names loaded through GoogleAPI");
    return initNames;
  } catch (error) {
      console.log('Error: ', error);
      return await getSheetsdbNames();
  }
}

async function getSheetsdbNames() { //acts as a cache in case googleapi is down
  var encodedFieldName = encodeURIComponent("Last Name");
  try {
    const response = await fetch('https://sheetdb.io/api/v1/m2c7w7xcwn3r0?sort_by=' + encodedFieldName + '&sort_order=asc');
    const data = await response.json();
    const initNames = [];

    for (let nameIndex in data) {
      let rawName = data[nameIndex];
      let fullName = rawName['First Name'] + ' ' + rawName['Last Name'];
      initNames.push(fullName);
    }

    console.log("Names loaded through SheetsDB");
    return initNames;
  } catch (error) {
    console.error('Error fetching data:', error);
    return ["Names could not be loaded."];
  }
}

async function displayNames() {
  const names = await getGoogleapiNames();

  var list1 = document.getElementById("namesList1");
  var list2 = document.getElementById("namesList2");
  var list3 = document.getElementById("namesList3");
  var list4 = document.getElementById("namesList4");

  var cols = 4;
  var namesPerCol = Math.ceil(names.length / cols);
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
}

window.onload = displayNames;
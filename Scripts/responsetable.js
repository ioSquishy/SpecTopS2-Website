const table = document.getElementById("responseTableBody");

const testData1 = ["first name", "maiden name", "email", "phone", "comments"];
const testData2 = ["first name2", "maiden name2", "email2", "phone2", "comments2"];
const testData3 = ["first name3", "maiden name3", "email3", "phone3", "comments3"];

const testData = [testData1, testData2, testData3];


function updateTable(row) {
  var tr = table.insertRow(-1);
  
  for (let i = 0; i < row.length; i++) {
    let td = tr.insertCell(i);
    td.innerText = row[i];
  }
}


Window.onload = testData.forEach(updateTable);
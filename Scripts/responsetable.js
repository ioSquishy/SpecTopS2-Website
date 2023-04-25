const table = document.getElementById("responseTableBody");

const testData1 = ["first name", "beeeeg maiden name", "email", "1231231234", "sus"];
const testData2 = ["mid first name2", "beeeg maiden name2", "email2234523", "1231231243", "bonk"];
const testData3 = ["longish first name3", "beeg maiden name3", "email4523", "1231231243", "eeeeeeeeeeeeeeeeeee"];
const testData4 = ["extra long first name4", "beg maiden name4", "email42453452345", "1231231234", ""];

const testData = [testData1, testData2, testData3, testData4];


function updateTable(row) {
  var tr = table.insertRow(-1);
  
  for (let i = 0; i < row.length; i++) {
    let td = tr.insertCell(i);
    td.innerText = row[i];
  }
}


Window.onload = testData.forEach(updateTable);
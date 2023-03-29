const table = document.querySelector("#responseTableBody");

const testData1 = ["first name", "maiden name", "email", "phone", "comments"];
const testData2 = ["first name2", "maiden name2", "email2", "phone2", "comments2"];

const testData = [testData1, testData2];

function loadData(row) {
  table.innerHTML += '<tr>';
  row.forEach(updateTable);
  table.innerHTML += '</tr>';
}

function updateTable(col) {
  table.innerHTML += '<td>' + col + '</td>';
}

function test() {
  table.innerHtml += "<td>" + "test1" + "</td>" + "<td>" + "test2" + "</td>";
}

//Window.onload = test();
Window.onload = testData.forEach(loadData);
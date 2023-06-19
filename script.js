function createTable() {
  var table = document.getElementById("myTable");
  var rowCount = parseInt(prompt("Input number of rows"));
  var columnCount = parseInt(prompt("Input number of columns"));

  // Clear existing table content
  table.innerHTML = "";

  // Create the table rows and cells
  for (var i = 0; i < rowCount; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < columnCount; j++) {
      var cell = row.insertCell(j);
      cell.textContent = "Row-" + i + " Column-" + j;
    }
  }
}

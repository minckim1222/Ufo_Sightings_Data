// Link to the tbody in html
var $tbody = document.querySelector("tbody");
var $filterInput = document.querySelector("#filterChoice");
var $filterBtn = document.querySelector("#filterBtn");
// Set a variable for the data
var filteredData = dataSet;

// Make function to render table

function renderTable(){
    //clear the table
    $tbody.innterHTML = ""
    //loop through the lengh of the data set
    for ( var i = 0; i < filteredData.length; i++){
        // set a variable for the current data point
        var dataPoint = filteredData[i];
        // get the fields of the data
        var fields = Object.keys(dataPoint);
        // set rows and insert them
        var $row = $tbody.insertRow(i);
        // now loop through each for for the fields
        for ( var j = 0; j < fields.length; j++){
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = dataPoint[field];
        }
    }
}
// Add event listener for the button

renderTable();
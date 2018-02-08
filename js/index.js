// Link to the tbody in html
var $tbody = document.querySelector("tbody");
var $filterInput = document.querySelector("#filterInput");
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

$filterBtn.addEventListener("click", handleSubmitClick);

function handleSubmitClick(event) {

    // The default behavior of a button clicked inside of a form is to try and submit the form somewhere (which we don't want)
    event.preventDefault();
    // set the filter parameters
    $filterInput.value = "";
    //reusing renderTable() function did not work.  however, rewriting the function worked. 
    $tbody.innerHTML = "";
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
    resetFilterMenu();

}

// Add switch event for the optional filters 
function filteredDataFunction(userChoice){
    switch (userChoice) {
        case "dateFilter":

        var userInput = $filterInput.value;
        // trim and lower case the users city input
        var filterDate = userInput;
        // filter the data with cities
        filteredData = dataSet.filter(function(choice)
        {
            var dataDate = choice.datetime;
            return dataDate === filterDate;
        }); 
        break;
        case "cityFilter":
            var userInput = $filterInput.value;
            // trim and lower case the users city input
            var filterCity = userInput.trim().toLowerCase();
            // filter the data with cities
            filteredData = dataSet.filter(function(choice)
            {
                var dataCity = choice.city.toLowerCase();
                return dataCity === filterCity;
            });
            break;

        case "stateFilter":
            var userInput = $filterInput.value;
            // trim and lower case the users city input
            var filterState = userInput.trim().toLowerCase();
            // filter the data with cities
            filteredData = dataSet.filter(function(choice)
            {
                var dataState = choice.state.toLowerCase();
                return dataState === filterState;
            });
            break;
        
        case "countryFilter":
            var userInput = $filterInput.value;
            // trim and lower case the users city input
            var filterCountry = userInput.trim().toLowerCase();
            // filter the data with cities
            filteredData = dataSet.filter(function(choice)
            {
                var dataCountry = choice.country.toLowerCase();
                return dataCountry === filterCountry;
            });
            break;
         
        case "shapeFilter":
            var userInput = $filterInput.value;
            // trim and lower case the users city input
            var filterShape = userInput.trim().toLowerCase();
            // filter the data with cities
            filteredData = dataSet.filter(function(choice)
            {
                var dataShape = choice.shape.toLowerCase();
                return dataShape === filterShape;
            });
            break;
        
        case "resetFilter":
            location.reload();

            break;
            
        }        
}

function resetFilterMenu(){
    var elements = document.getElementById("selDataSet");
    for(var i=0; i < elements.length ; i++){
    elements[i].selected = elements[i].defaultSelected;
    }
}


renderTable();









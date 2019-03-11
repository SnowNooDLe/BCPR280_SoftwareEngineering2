function createTable(output) {
    var i=0, rowEl=null,
    tableEl = document.createElement("table");
    var lines = document.getElementById(output).innerHTML.split('\r\n');
    console.log("ERROR");
    console.log(lines);
    // create 10 table rows, each with two cells
    for (i=1; i <= 10; i++) {
        rowEl = tableEl.insertRow();  // DOM method for creating table rows
        rowEl.insertCell().textContent = "table cell "+ i +"-1" ;      
        rowEl.insertCell().textContent = "table cell "+ i +"-2" ;      
    }
    document.body.appendChild( tableEl);
}
//      BCPR280 Software Engineering 2
//      Program to calculate the Mean and Standard Deviation
//      by parsing data from txt file by user
//      Author: Tom Son 
    
//      Main JavaScript file

//      github address: github.com/SnowNooDLe

function createTable() {
    // displaying lists of numbers and sum
    var i=0, j=0, rowEl=null,
    tableEl = document.createElement("table");
    // will be lines of numbers in textarea called 'output' and read their data
    // and store to lines line by line
    var lines = document.getElementById("output").innerHTML.split('\r\n');
    var sum = 0;
    var stddiv = 0;
    var calculated_stddiv = 0;
    
    for (i=0; i < 10; i++) {
        rowEl = tableEl.insertRow();  // DOM method for creating table rows
        rowEl.insertCell().textContent = i + 1;
        rowEl.insertCell().textContent = lines[i];
        sum += parseFloat(lines[i]);
    }
    // sum part
    rowEl = tableEl.insertRow();
    rowEl.insertCell().textContent = "SUM";
    rowEl.insertCell().textContent = sum;
    sumArray.push(sum);

    // standard deviation
    
    for (j =0; j < 10; j++){
        stddiv += Math.pow((parseFloat(lines[j] - sum)),2);
    }
    // console.log(stddiv);
    calculated_stddiv = Math.sqrt(stddiv/9);
    // console.log(calculated_stddiv);

    rowEl = tableEl.insertRow();
    rowEl.insertCell().textContent = "SD";
    // print only upto 4decimal points
    rowEl.insertCell().textContent = calculated_stddiv.toFixed(4);
    test.appendChild(tableEl);
}
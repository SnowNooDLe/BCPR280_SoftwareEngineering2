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
    // just in case there is an empty string, count one with actual number
    var total_numbers = 0;
    
    // just for desgin part to show which column indicates what
    rowEl = tableEl.insertRow();
    rowEl.insertCell().textContent = "n";
    rowEl.insertCell().textContent = "value";

    // just because of code above, index value will start from 1 as 0 is taken for n/value
    // by using lines.length, can find the maximum length.
    // checked txt file and last line was empty string ? just new line with nothing, this case will not add any.
    // by checking it with if statement
    for (i=1; i <= lines.length; i++) {
        if (lines[i-1] != ""){
            rowEl = tableEl.insertRow();  // DOM method for creating table rows
            rowEl.insertCell().textContent = i;
            // but indexing value for lines starting from 0, so need to minus 1
            rowEl.insertCell().textContent = lines[i-1];
            sum += parseFloat(lines[i-1]);
            total_numbers += 1;
        }  
    }
    // sum part
    rowEl = tableEl.insertRow();
    rowEl.insertCell().textContent = "SUM";
    rowEl.insertCell().textContent = sum;
    sumArray.push(sum);

    // standard deviation,  based on calculation on given word file.
    for (j =0; j < lines.length; j++){
        if (lines[j] != ""){
            stddiv += Math.pow((parseFloat(lines[j] - sum)),2);
        }
        
    }
    // console.log(stddiv);
    calculated_stddiv = Math.sqrt(stddiv/total_numbers-1);
    stdArray.push(calculated_stddiv);
    // console.log(calculated_stddiv);

    rowEl = tableEl.insertRow();
    rowEl.insertCell().textContent = "SD";
    // print only upto 4decimal points
    rowEl.insertCell().textContent = calculated_stddiv.toFixed(4);
    output_tables.appendChild(tableEl);
    // console.log(lines.length)
    // console.log(lines)
    // console.log(typeof lines)

}
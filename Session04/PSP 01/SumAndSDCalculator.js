var loadedHandler = function (event) {
  // console.log("file has loaded")
  // console.log(event.target.result);
  var user = event.target.result.split('\r\n');
  console.log(user);
  console.log(typeof user);
  // console.log("here 3");
  
//   localStorage.setItem('user', JSON.stringify({username: user[0], password: user[1]}));
//   var result = JSON.parse(localStorage.getItem('user'));
//   console.log(JSON.stringify(user));
//   console.log(result);
};

// define the reaction when change event happens
var fileChangeHandler = function (event) {
  "use strict";  
  // console.log("file has changed!")
  var reader = new FileReader();  
  reader.onload = loadedHandler;
  
  // console.log("here 1");
  var theFile = event.target.files[0];
  reader.readAsText(theFile);
  // console.log("here 2");
};

function createTable() {
    var i=0, rowEl=null,
        tableEl = document.createElement("table");
    // create 10 table rows, each with two cells
    for (i=1; i <= 10; i++) {
      rowEl = tableEl.insertRow();  // DOM method for creating table rows
      rowEl.insertCell().textContent = "table cell "+ i +"-1" ;      
      rowEl.insertCell().textContent = "table cell "+ i +"-2" ;      
    }
    document.body.appendChild( tableEl);
  }

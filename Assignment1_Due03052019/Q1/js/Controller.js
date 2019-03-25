/* jshint undef: true, unused: true, esversion: 6*/

// Explicitly indicating "use strict" may not be necessary in ES6
// http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code


// <<CONTROLLER>>
function main() {
    // "use strict";
    let toybox;
    toybox = new Toybox();
    toybox.addToy( "Teddy", "Brown", 12.34 );
    toybox.addToy( "Dolly", "Pink", 21.43 );
    toybox.addToy( "Bat", "Wooden", 34.56 );
    View.clr();
    View.out(toybox);
}
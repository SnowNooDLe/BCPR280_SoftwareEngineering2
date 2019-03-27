/* jshint undef: true, unused: true, esversion: 6*/

// Explicitly indicating "use strict" may not be necessary in ES6
// http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code


// <<CONTROLLER>>
function main() {
    // "use strict";
    let game;
    game = new Game();
    

    View.clr();
    View.out(game);
}
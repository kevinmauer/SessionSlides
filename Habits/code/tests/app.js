// var a = 12;

// var b = 13;

// var c = b + a

/*
    If this code were uncommented a would be interpreted as an object using [] notation (i.e., no ASI)
    ['menu', 'items', 'listed']

.forEach(function(element) {
        console.log(element);
    })*/

/* If this code were uncommented, at would be interpreted as a function being passed this anonymous function as a prameter
(function() {
    console.log('this is first statement');
    console.log('this is second statement');
}())*/
'use strict';
function returnObject() {
    if (true) {
        // originally, return statement was on its own line, therefore function returned 'undefined' (due to ASI)
        return {
            greeting: 'hello'
        };
    }
}



(function() {

    // console.log(typeof foo); // function pointer
    // console.log(typeof bar); // undefined

    /* Type error - bar is not a function 
         yet - during execution stage is when bar gets function assignment - doesn't have it yet here
         first pass, bar created and assigned undefined - second pass is when it gets its function assignment */
    // console.log(bar()); 

    var foo = 'hello',
        bar = function () {
            return 'world';
        };

    function foo() {
        return 'hello';
    }
    // console.log(bar()); // world
}());

var myAlerts = [];
function makeLogger(x) {
    return function () {
        console.log(x);
    }
}
for (let i = 0; i < 5; i++) {
    // let x = i;
    function f2() { }
    
    myAlerts.push(function inner() {
        console.log(i);
    });
}

myAlerts[0]();
myAlerts[1]();
myAlerts[2]();
myAlerts[3]();
myAlerts[4]();

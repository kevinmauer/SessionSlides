'use strict';

testVar = 150;
var obj = {
            a: 100, 
            b: 200
},
    myVar = 10;

delete obj.a;
delete testVar;
delete obj;

console.log(obj);
console.log(myVar);

/*
var toPrint = "print me";

function print(out) {
	stringToPrint = out;
    console.log(stringToPrint);
}

print('Hello');
console.log(stringToPrint);
*/
// var phrase = 'hello world!';
this.phrase = 'hello there';

function printPhrase () {
    console.log(this.toString());
    console.log(this.hasOwnProperty('phrase'));
    console.log(this.phrase);
}

printPhrase();
console.log(this.phrase);

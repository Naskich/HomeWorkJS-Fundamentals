//Problem 1. Reverse string
//Write a JavaScript function that reverses a string and returns it.
//sample - elpmas

var str = 'sample';
function reverse(){
var reverStr = str.split('').reverse().join('');
console.log(reverStr);
}
reverse();
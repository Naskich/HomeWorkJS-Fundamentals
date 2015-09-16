// Problem 2. Reverse number
// Write a function that reverses the digits of given decimal number.
// Input
var input = 123.45; // Change value to TEST
var change = input+'';
// Solution  
var reverse = function(str){
var arr = [];
for (var i=0 , number = str.length; i <= number; i++ ){
arr.push(str.charAt(number-i));
}
return arr.join('');
}
// Output
reverse(''+change)*1;
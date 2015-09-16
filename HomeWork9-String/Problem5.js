//Problem 5. nbsp
//Write a function that replaces non breaking white-spaces in a text with &nbsp;
// Input
var str = 'Write a function that replaces non breaking white-spaces in a text';
// Solution
function replace(str){  // Change value to TEST
var result;
result = str
.replace(/ /g,"")
return result;
} 
// Output
console.log(replace(str));
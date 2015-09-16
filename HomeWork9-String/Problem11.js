//Problem 11. String format
//Write a function that formats a string using placeholders.
//The function should work with up to 30 placeholders and all types.
// Input
 var str = 'Hello {0}!'; // Change value to TEST
// Solution 
function replace(str){
 var result;
 result = str
 .replace(/\{0}!/g,"Peter")
 return result;
}
// Output
console.log("Ivan said:", replace(str));

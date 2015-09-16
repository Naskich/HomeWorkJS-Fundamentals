//Problem 2. Lexicographically comparison
//Write a script that compares two char arrays lexicographically (letter by letter).
var a = ['c','a','f'];
var b = ['j','b','r'];
a=a.concat(b);
a.sort();
console.log(a.join(','));
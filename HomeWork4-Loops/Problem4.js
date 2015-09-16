//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, 
//window and navigator objects.
var wordObject = {"window":0,"document":1,"navigator":2}
console.log("indexes:");
var indexes = [];
for (var index in wordObject){
 indexes.push(index);
}
indexes.sort();
for (var i=0; i<indexes.length; i++){
console.log(indexes[i] + "->" + wordObject[indexes[i]]);
}
//Problem 6. Most frequent number
//Write a script that finds the most frequent number in an array.
var array=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
array = array.filter(function (frequent){
return frequent %4 == 0;
return frequent %2 == 0;
return frequent %3 == 0;
return frequent %9 == 0;
return frequent %1 == 0;
})
console.log(array.join(" "));
array.length;
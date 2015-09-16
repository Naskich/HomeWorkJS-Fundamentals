//Problem 1. Increase array members
//Write a script that allocates array of 20 integers and initializes 
//each element by its index multiplied by 5.
var array = [50,2,31,1,5,17,9,3,10,22,4,11,14,6,25,37,63,45,40,72];
var number = 5;
for (i=0, ii=array.length; i<ii; i++) {
  array[i] = array[i] * number;
}
console.log(array[i]);
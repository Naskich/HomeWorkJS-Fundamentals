//Problem 5. Youngest person
//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.
//Example:
//var people = [
  //{ firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
  //{ firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
 var fnameIv = 'Ivan';
var SnameIv = 'Ivanov';
var yearIv = '32';
var fnameDr = 'Drago';
var SnameDr = 'Petrov';
var yearDr = '21';
var fnameHr = 'Petar';
var SnameHr = 'Hristov';
var yearHr = '41';
var people = [{
FirstName:fnameIv,
FamilyName:SnameIv , 
years:yearIv 
} , {
FirstName:fnameDr,
FamilyName:SnameDr, 
years:yearDr  
} , {
FirstName:fnameHr,
FamilyName:SnameHr, 
years :yearHr}];
var yearDr = +yearDr;
var yearIv = +yearIv;
var yearHr = +yearHr;
function jung(){
if (yearDr<yearIv<yearHr){
console['log'](people["FirstName:Drago,FamilyName:Petrov, years :21"]);
console.log(["FirstName:Drago,FamilyName:Petrov, years :21"]);
}
}
jung();
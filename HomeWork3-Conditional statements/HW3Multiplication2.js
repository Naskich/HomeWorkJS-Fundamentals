//Problem 2. Multiplication Sign
//Write a script that shows the sign (+, - or 0) 
//of the product of three real numbers, without calculating it.
//Use a sequence of if operators.
var a = 5 , b = 3 , c = 2;
var a = + a , b = + b , c = + c;
var result1 ="+";
var result2 ="-";
var result3 ="0";
if (a==0 || b==0 || c==0){
console.log("result is",result3);
} else if (a==b || b==c || a==c){
console.log("result is",result1);
} else { 
console.log("result is",result2);
}
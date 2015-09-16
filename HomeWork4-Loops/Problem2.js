//PProblem 2. Numbers not divisible
//Write a script that prints all the numbers from 1 to N, 
//that are not divisible by 3 and 7 at the same time
var a = 1 , n = 100;
var a = +a;
var n = +n;
var b = '-';
for(a=1; a < n; a++ )
if(a%3==0 || a%7==0){
console.log(b);
}else{
console.log( + a );
}
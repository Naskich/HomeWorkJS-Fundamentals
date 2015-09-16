//Problem 2. Divisible by 7 and 5
//Write a boolean expression that checks for given integer if it can be divided
//(without remainder) by 7 and 5 in the same time.
var n='3';
var n=+n;
if (n % 5==0 && n % 7==0){
    console.log("n=true");
}else{
    console.log("n=false");
}

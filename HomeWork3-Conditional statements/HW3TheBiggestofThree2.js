//Problem 3. The biggest of Three
//Write a script that finds the biggest of three numbers.
//Use nested if statements.
var a = 5 , b = 2 , c = 2;
var a = + a, b = + b , c = + c;
if (a>b && b>c || a>b && c==b || a>c && c >b){
console.log("biggest is", a);
} 
else if(b>a && a>c || b>a && a==c || b>c && c>a){
console.log("biggest is", b);
} 
else if(c>a && a>b || c>a && a==b || c>b && b>a){
console.log("biggest is", c);
}
else if (a==b && b>c){
console.log("biggest is", a);
}
else if (a==c && a>b){
console.log("biggest is", a);
}
else if (b==c && c>a){
console.log("biggest is", b);
}
else{
console("biggest is", c);
}
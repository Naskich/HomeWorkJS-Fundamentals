//Problem 4. Sort 3 numbers
//Sort 3 real values in descending order.
//Use nested if statements.
var a = 0 , b = 2 , c =3;
var sumAbc = (a + "") + (b + "") + (c + "");
var sumBac = (b + "") + (a + "") + (c + "");
var sumCab = (c + "") + (a + "") + (b + "");
var sumBca = (b + "") + (c + "") + (a + "");
var sumCba = (c + "") + (b + "") + (a + "");
var sumAcb = (a + "") + (c + "") + (b + "");
if(a>b && b>c || a>b && b==c){ 
console.log("result is",sumAbc);
} else if(b>a && a>c || b>a && a==c){
console.log("result is",sumBac);
} else if (c>a && a>b || c>a && a==b){
console.log("result is",sumCab);
} else if(b>c && c>a || b>c && a==c){
console.log("result is",sumBca);
} else if(c>b && b>a || c>b && b==a){
console.log("result is",sumCba);
} else if(a>c && c>b || a>c && c==b){
console.log("result is",sumAcb);
} else if(c>a && c==b){
console.log("result is",sumCba);
} else if(b>c && b==a){
console.log("result is",sumBac);
}else if(a>b && b==c){
console.log("result is",sumAbc);
}else if(a==b && b==c){
console.log("result is",sumAbc);
} else { 
console.log("result is",sumAbc);
}

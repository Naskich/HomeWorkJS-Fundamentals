//Problem 7. The biggest of five numbers
//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

var a = 2 , b =3 , c = 4 , d = 6 , e = 5 ;
var a = +a, b = + b , c = + c , d = + d , e = + e ;
if (a>b && b>c && c>d && d>e){
console.log("biggest is", a);
} else if(a>b && b==c && d>c && a>d && d>e){
console.log("biggest is", a);
} else if(a>b && b==c && d==c && a>d && d>e){
console.log("biggest is", a);
}else if(a>b && b==c && d==c && d==e){
console.log("biggest is", a);
}else if(b>a && a==c && d==c && d==e){
console.log("biggest is", b);
}else if(b>a && a>c && c>d && d>e){
console.log("biggest is", b);
}else if(b>a && a>c && c==d && d==e){
console.log("biggest is", b);
}else if(b>a && a>c && c>d && d==e){
console.log("biggest is", b);
}else if(b>c && c>d && d>e && e>a){
console.log("biggest is", b);
}else if(c>a && a==b && b==d && d==e){
console.log("biggest is", c);
}else if(c>a && a==b && b>d && d>e){
console.log("biggest is", c);
}else if(c>b && b>a && a==d && d==e){
console.log("biggest is", c);
}else if(c>d && d>a && a>b && b>e){
console.log("biggest is", c);
}else if(c>d && d>a && a==b && b==e){
console.log("biggest is", c);
}else if(c>d && d>a && a>b && b==e){
console.log("biggest is", c);
}else if(b>d && d==e && e>c && c>a){
console.log("biggest is", b);
}else if(c>e && e>a && a>b && b==d){
console.log("biggest is", c);
}else if(c>e && e==a && a==b && b==d){
console.log("biggest is", c);
}else if(c>e && e==d && d>a && a>b){
console.log("biggest is", c);
}else if(d>a && a>b && b>c && c>e){
console.log("biggest is", d);
}else if(d>a && a==b && b==c && c==e){
console.log("biggest is", d);
}else if(d>b && b>a && a==c && c==e){
console.log("biggest is", d);
}else if(d>b && b>a && a==c && c==e){
console.log("biggest is", d);
}else if(d>c && c>a && a==b && b==e){
console.log("biggest is", d);
}else if(d>c && c>a && a>b && b==e){
console.log("biggest is", d);
}else if(d>e && e>a && a>b && b==c){
console.log("biggest is", d);
}else if(d>e && e>a && a>b && b>c){
console.log("biggest is", d);
}else if(d>e && e==a && a==b && b==c){
console.log("biggest is", d);
}else if(e>a && a==b && b==c && c==d){
console.log("biggest is", e);
}else if(e>a && a>b && b>c && c>d){
console.log("biggest is", e);
}else if(e>a && a>b && b==c && c==d){
console.log("biggest is", e);
}else if(e>a && a>b && b>c && c==d){
console.log("biggest is", e);
}else if(e>d && d>b && b>c && c==a){
console.log("biggest is", e);
}else if(e==d && d>c && c==a && a>b){
console.log("biggest is", e)
}else if(e==d && d==b && b==c && c==a){
console.log("biggest is", a);
}else if(b>c && c==d && d>e && e>a){
console.log("biggest is", b);
}else if(b>c && c>d && d==e && e>a){
console.log("biggest is", b);
}else if(b>c && c>d && d>e && e==a){
console.log("biggest is", b);
}else if(b>c && c==a && a>d && d>e){
console.log("biggest is", b);
}else if(e>d && d>c && c>b && b>a){
console.log("biggest is", e);
}else if(d>e && e>c && c>b && b>a){
console.log("biggest is", d);
}
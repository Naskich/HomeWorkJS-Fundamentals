//Problem 6. Point in Circle
//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5).
//{0,0} is the centre and 5 is the radius
var x ='2';
var y ='3';
var x = +x;
var y = +y;
var sum=x*x+y*y;
if (sum<=25){
    console.log("inside is true");
}else{
    console.log("inside is false");
}
//Problem 5. Third bit
//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit #0.
//The result of the expression should be either 1 or 0.
var n =5;
var binary = n.toString(2);
console.log(binary);
var del=binary/1000;
var str=del+"";
var str2="0000000000000";
var last=(str+str2);
var last2=last[0]; // Програмата работи коректно, но  при големи числа е необходимо да се
                   // промяна на посоката на броене [0] се почва първата пзоиция, а в
//  друг случай е нобходима проняна на цифрата в квадратните скоби
if(last2==0){
    console.log("bit3 = 0")
} else {
    console.log("bit3 = 1")
}


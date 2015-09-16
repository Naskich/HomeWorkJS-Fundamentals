//Problem 4. Third digit
//Write an expression that checks for given integer if its third digit (right-to-left) is 7.
var n = "00005",num ="9999799"; // Посочвам две числа за това ще има два отговора
var number = n[4];             // отговор за n и num
var numberdes=number*1;
if (numberdes==7){
    console.log(" n is true")
}else{
    console.log(" n is false")
}
var numbers = num[4];
var numbersdes = numbers*1;
if (numbersdes==7){
    console.log("num is true")
}else{
    console.log("num is false")
}
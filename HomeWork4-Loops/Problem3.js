//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.
function Main(bufferElement) {  
  var number = [ 7, 9, 2, 4, 5]; 
  var minValue = -9007199254740992; 
  var maxValue = 9007199254740992;
  var min;
  var max;
    for (var i = 0; i < number.length; i++) {
        if (number[i] < maxValue) {
            maxValue = number[i];
            min = maxValue;
        }
        if (number[i] > minValue) {
            minValue = number[i];
            max = minValue;
        }
    }
   console.log("Sequence: ", + number);
}
console.log("Min number si:", min);
console.log("Max number is:", max);
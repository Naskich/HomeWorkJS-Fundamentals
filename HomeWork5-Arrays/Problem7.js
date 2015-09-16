//Problem 7. Binary search
//Write a script that finds the index of given element in a 
//sorted array of integers by using the binary search algorithm.
 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     var searchElement = 5;
       var min = 0 ;
      var  max = arr.length - 1 ;
       var index = -1;  
    while (min <= max) {
        var middle = min + (max - min) / 2;
        middle = Math.floor(middle);
        if (arr[middle] > searchElement) {
            max = middle - 1;
        }
        else if (arr[middle] < searchElement) {
            min = middle + 1;
        }
        else {
            index = middle;
            break;
        }
    }
    console.log("Index of element" + searchElement + ' is ' + index);
}
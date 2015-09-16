//Problem 5. Appearance count
//Write a function that counts how many times given number appears in given array.
//Write a test function to check if the function is working correctly.

  var arr = [5, 8, 9, 5, 43, 2, 7, 87, 98, 3, 2, 7, 8], // Change value to TEST
    searchNumber = 5;
    // Solution   
    function search(number) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                counter++;
            }
        }
        return counter;
    }
    function test(number, arr, answer) {
        var counter = 0,
            resultOfTest;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                counter++;
            }
        }
        if (counter === answer) {
            resultOfTest = "The function is correct!";
        }
        else {
            resultOfTest = "The function is not correct!";
        }
        return resultOfTest;
    }
    // Output
    console.log("Search number: " + searchNumber);
    console.log("Result of search: " + search(searchNumber));
    console.log(search(searchNumber) === 1 ? " time" : " times");
    console.log();
    console.log("Test function: " + test(searchNumber, arr, search(searchNumber)));
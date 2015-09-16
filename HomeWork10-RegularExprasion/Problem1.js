//Problem 1. Format with placeholders
//inputvar options = {name: 'John'};'Hello, there! Are you #{name}?'.format(options);
//output'Hello, there! Are you John'
//Write a function that formats a string. The function should have placeholders, as shown in the example
//Add the function to the String.prototype

var options = 'Hello, there! Are you #{name}?'
function replace(options){
var result;
result = options
.replace(/#{name}?/g,"John")
return result;
} 
console.log(replace(options));

// Second Solution 
 var text = "My name is #{name} and I am #{age}-years-old'?", 
        options = { name: 'John', age: 13 };
                                                                 
    String.prototype.format = function stringFormat(str) {
        if (str.age === undefined) {
            return this.replace(/#{name}/g, str.name);
        }
        return this
        .replace(/#{name}/g, str.name)
        .replace(/#{age}/g, str.age);
    };                                                             
    console.log(text + "  " + JSON.stringify(options));
    console.log(text.format(options));
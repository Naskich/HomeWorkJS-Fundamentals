//Problem 2. HTML binding
//Write a function that puts the value of an object into the content/attributes of HTML tags.
//Add the function to the String.prototype

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';

String.prototype.bind = function bind(str, obj){
 if (obj.link !== undefined ){
return str.replace(/><\//, ' href="' + obj.link + '"' + ' class="' + obj.name + '"' + '>' + obj.name + '</');
}
return str.replace(/><\//, ">" + obj.name + "</");
}
 console.log(str);
    console.log(str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'}));

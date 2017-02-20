var $ = require('jquery');
var Person = require('./modules/Person');

alert("test123");

var john = new Person("john doe", "blue");
var jane = new Person("jane smith", "green");

john.greet();
jane.greet();

$("h1").remove();

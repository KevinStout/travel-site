var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes");
  }
}

var john = new Person("john doe", "blue");
var jane = new Adult("jane smith", "orange");

john.greet();
jane.greet();
jane.payTaxes();

$("h1").remove();

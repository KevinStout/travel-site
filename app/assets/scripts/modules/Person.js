
function Person(fullName, favColor) {
  this.name = fullName;
  this.favColor = favColor;
  this.greet = function () {
    console.log("hello there! my name" + this.name + " and i like " + this.favColor + ".");
  }
}

module.exports = Person;

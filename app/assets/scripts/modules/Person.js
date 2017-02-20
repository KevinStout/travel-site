
class Person {
  constructor(fullName, favColor){
    this.name = fullName;
    this.favColor = favColor;
  }

  greet() {
    console.log("sssssssss there! my name" + this.name + " and i like " + this.favColor + ".");
  }
}

//module.exports = Person;
export default Person;

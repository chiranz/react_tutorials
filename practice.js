// USER AS A FUNCTION
function User({ name, age, gender }) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

User.prototype.getName = function () {
  return `Your name is ${this.name}`;
};

User.prototype.setName = function (name) {
  this.name = name;
};

const Anmol = new User({ name: "Anmol", age: 20, gender: "Male" });

console.log(Anmol.name);
console.log(Anmol.age);

Anmol.setName("Anmollll");

console.log(Anmol.name);

// AS A CLASS
class ClassUser {
  constructor({ name, age, gender }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getName() {
    return `Your name is ${this.name}`;
  }

  setName(name) {
    this.name = name;
  }
}

const jack = new ClassUser({ name: "Jack", age: 10, gender: "Male" });

console.log(jack.name);
console.log(jack.age);

jack.setName("jackkkk");

console.log(jack.name);

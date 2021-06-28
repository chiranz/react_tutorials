class Person {
  name = null;
  height = null;
  weight = null;
  constructor(name, height, weight) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  position = [0, 0];

  setName(_name) {
    this.name = _name;
  }
}

class Attacker extends Person {
  life = 100;
  weapon = "AK47";

  constructor(name, height, weight) {
    super(name, height, weight);
  }

  pickWeapon(_weapon) {
    this.weapon = _weapon;
  }
}

const nisal = new Attacker("nisal", 157, 50);

console.log(nisal.name);

console.log(nisal.height);

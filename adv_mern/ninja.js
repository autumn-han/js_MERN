class Ninja {
  constructor(name, health) {
    (this.name = name),
      (this.health = health),
      (this.speed = 3),
      (this.strength = 3);
  }
  sayName() {
    console.log(`name: ${this.name}`);
  }
  showStats() {
    console.log(
      `name: ${this.name} | health: ${this.health} | speed: ${this.speed} | strength: ${this.strength}`
    );
  }
  drinkSake() {
    this.health += 10;
    console.log(
      `${this.name} drank some sake and gained 10 health, now ${this.name}'s health is at ${this.health}`
    );
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("The early bird gets the worm");
  }
}

const sensei1 = new Sensei("Kakashi");
sensei1.speakWisdom();
sensei1.sayName();
sensei1.showStats();

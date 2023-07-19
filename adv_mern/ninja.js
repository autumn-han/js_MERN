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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

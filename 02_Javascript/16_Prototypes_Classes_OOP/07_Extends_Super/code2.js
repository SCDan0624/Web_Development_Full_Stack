class Wizard {
  constructor(name, HP, MP) {
    this.name = name;
    this.HP = HP;
    this.MP = MP;
  }
  magicBoost() {
    this.MP = this.MP * 2;
    console.log(`Your MP are now ${this.MP}`);
  }
}

myWizard1 = new Wizard("Tellah", 100, 200);
myWizard1.magicBoost();

class Battlemage extends Wizard {
  constructor(name, HP, MP, attack) {
    super(name, HP, MP);
    this.attack = attack;
  }
}

Cecil = new Battlemage("Cecil", 250, 150, 200);

/*
  Wizard {
  name: 'Tellah',
  HP: 100,
  MP: 200,
  __proto__: Wizard { constructor: ƒ Wizard(), magicBoost: ƒ magicBoost() }
}
'Your MP are now 400'
Battlemage {
  name: 'Cecil',
  HP: 250,
  MP: 150,
  attack: 200,
  __proto__: Battlemage { constructor: ƒ Battlemage() }
}
  */

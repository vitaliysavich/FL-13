function Fighter({ name, damage, hp, strength, agility }) {
  let totalHp = hp;
  let fighter = {
    name: name,
    damage: damage,
    hp: hp,
    strength: strength,
    agility: agility,
    wins: 0,
    losses: 0
  };
  this.getName = () => fighter.name;
  this.getDamage = () => fighter.damage;
  this.getStrength = () => fighter.strength;
  this.getAgility = () => agility;
  this.getHealth = () => hp;
  this.dealDamage = (amountDamage) => {
    hp -= amountDamage;
    if (hp < 0) {
      hp = 0;
    }
  };
  this.attack = (anotherFighter) => {
    let probabillity =
      1 - (anotherFighter.getStrength() + anotherFighter.getAgility()) / 100;
    let isSuccessful = Math.random() < probabillity;
    if (isSuccessful) {
      anotherFighter.dealDamage(this.getDamage());
      console.log(
        `${this.getName()} makes ${this.getDamage()} damage to ${anotherFighter.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  };
  this.logCombatHistory = () => {
    console.log(
      `Name: ${this.getName()}, Wins:${fighter.wins}, Losses:${fighter.losses}`
    );
  };
  this.heal = (amountHeal) => {
    hp += amountHeal;
    if (hp > totalHp) {
      hp = totalHp;
    }
  };
  this.addWin = () => {
    fighter.wins++;
  };
  this.addLoss = () => {
    fighter.losses++;
  };
}
function battle(fighter1, fighter2) {
  let fight = true;
  if (fighter1.getHealth() === 0) {
    fight = false;
    console.log(`${fighter1.getName()} is dead and can't fight`);
  }
  if (fighter2.getHealth() === 0) {
    fight = false;
    console.log(`${fighter2.getName()} is dead and can't fight`);
  }
  while (fight) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
      fight = false;
      console.log(`${fighter1.getName()} has won!`);
      fighter1.addWin();
      fighter2.addLoss();
    }
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
      fight = false;
      console.log(`${fighter2.getName()} has won!`);
      fighter2.addWin();
      fighter1.addLoss();
    }
  }
}

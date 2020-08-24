var RetiredForagerBee = function () {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  // this.forage = function (treasure) { this.treasureChest.push(treasure) }
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function (treasure) { return 'I am too old, let me play cards instead' };
RetiredForagerBee.prototype.gamble = function (treasure) { this.treasureChest.push(treasure) };

/*
class structure:

Grub
  Bee
    HoneyMakerBee
    ForagerBee
      RetiredForagerBee
*/
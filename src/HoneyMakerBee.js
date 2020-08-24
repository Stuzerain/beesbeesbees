var HoneyMakerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  // this.makeHoney = function () { this.honeyPot++ };
  // this.giveHoney = function () { this.honeyPot-- };

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
// HoneyMakerBee.prototype.age = 10;
// HoneyMakerBee.prototype.job = 'make honey';
// HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function () { this.honeyPot++ };
HoneyMakerBee.prototype.giveHoney = function () { this.honeyPot-- };

/*
class structure:

Grub
  Bee
    HoneyMakerBee
    ForagerBee
      RetiredForagerBee
*/
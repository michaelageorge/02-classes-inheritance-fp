'use strict';

class Vehical {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  stop() {
    return 'Stopping';
  }

  drive() {
    return 'Moving Forward';
  }
}

class Car extends Vehical {
  constructor(name) {
    super(name, 4);
  }

}

class Motorcycle extends Vehical{
  constructor(name) {
    super(name, 2);
  }

  wheelie() {
    return 'Wheee!';
  }

}

module.exports = {Car, Motorcycle};
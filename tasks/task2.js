"use strict";
class Vehicle {
}
class Car extends Vehicle {
    start() {
        return `car is stared`;
    }
    stop() {
        return `car is stopped`;
    }
}
const car = new Car();
console.log(car.start());
console.log(car.stop());
class MotorCycle extends Vehicle {
    start() {
        return `MotorCycle is stared`;
    }
    stop() {
        return `MotorCycle is stopped`;
    }
}
const motorCycle = new MotorCycle();
console.log(motorCycle.start());
console.log(motorCycle.stop());

abstract class Vehicle {
    abstract start():string;
    abstract stop():string;
}

class Car extends Vehicle{
    start():string{
        return `car is stared`
    }
    stop(): string {
        return `car is stopped`
    }
}
const car = new Car()
console.log(car.start());
console.log(car.stop());

class MotorCycle extends Vehicle{
    start():string{
        return `MotorCycle is stared`
    }
    stop(): string {
        return `MotorCycle is stopped`
    }
}
const motorCycle = new MotorCycle()

console.log(motorCycle.start());
console.log(motorCycle.stop());

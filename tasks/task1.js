"use strict";
class Circle {
    type;
    unitOfMeasurement;
    radius;
    constructor(type, unitOfMeasurement, radius) {
        this.type = type;
        this.unitOfMeasurement = unitOfMeasurement;
        this.radius = radius;
    }
    accountArea() {
        return this.radius ** 2 * Math.PI;
    }
}
const circle = new Circle('Circle', 'sm', 5);
console.log(circle.accountArea());
console.log(circle.type);
class Rectangle {
    type;
    unitOfMeasurement;
    width;
    height;
    constructor(type, unitOfMeasurement, width, height) {
        this.type = type;
        this.unitOfMeasurement = unitOfMeasurement;
        this.width = width;
        this.height = height;
    }
    accountArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle('Rectangle', 'sm', 10, 5);
console.log(rectangle.accountArea());

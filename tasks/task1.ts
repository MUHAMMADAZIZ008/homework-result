interface Shape{
    type: string;
    unitOfMeasurement: string;
}

class Circle implements Shape{
    type: string;
    unitOfMeasurement: string;
    radius: number;
    constructor(type: string, unitOfMeasurement: string, radius: number){
        this.type = type;
        this.unitOfMeasurement = unitOfMeasurement;
        this.radius = radius;
    }
    accountArea(): number {
        return this.radius ** 2 * Math.PI
    }
}


const circle = new Circle('Circle', 'sm', 5)
console.log(circle.accountArea());
console.log(circle.type);


class Rectangle implements Shape {
    type: string;
    unitOfMeasurement: string;
    width: number;
    height: number;

    constructor(type: string, unitOfMeasurement: string, width: number, height: number) {
        this.type = type;
        this.unitOfMeasurement = unitOfMeasurement;
        this.width = width;
        this.height = height;
    }

    accountArea(): number {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle('Rectangle', 'sm', 10, 5)
console.log(rectangle.accountArea());

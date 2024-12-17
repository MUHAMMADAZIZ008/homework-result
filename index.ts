//class decarator
// function Sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
//   console.log(`Klass ${constructor.name} muhrlandi.`);
// }

// @Sealed
// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user = new User("Aziz");
// console.log(user);


//method decator
// function LogMethod(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Metod ${propertyKey} chaqirildi:`, args);
//     const result = originalMethod.apply(this, args);
//     console.log(`Natija:`, result);
//     return result;
//   };
// }

// class Calculator {
//   @LogMethod
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const calc = new Calculator();
// calc.add(5, 7);


//propertiy decarator
// function LogParameter(
//   target: any,
//   propertyKey: string,
//   parameterIndex: number
// ) {
//   console.log(
//     `Metod "${propertyKey}" uchun ${parameterIndex}-parametr dekoratsiya qilindi`
//   );
// }

// class User {
//   greet(@LogParameter message: string) {
//     console.log(`Xabar: ${message}`);
//   }
// }

// const user = new User();
// user.greet("Assalomu alaykum");

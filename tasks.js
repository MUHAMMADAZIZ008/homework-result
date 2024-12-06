//1. Array
// const arr: Array<number | string> = ["", 1, 5, 6 , ""] // nechta bo'lsa ham faqat string yo'ki number kiritish kerak
// console.log(arr);
// type arr1Cos = (string | number)[]
// const arr: arr1Cos = ["", 1, 5, 6 , ""] //costum type bilan
// console.log(arr);
//2. Tuple
// const newTuple: [string, number, string] = ['Muhammadaziz', 16, '2008-08-21']// tuple da ketma ketlig muhim
// console.log(newTuple);
// const person: [number, string] = [17, 'Muhammadaziz']
// 3. Type Aliases
// type User = {
//     name: string,
//     age: number,
//     address: string
// }
// const user1: User = {
//     name: "Muhammadaziz",
//     age: 16,
//     address: "Andijon"
// }//har bir key da gi valeu uchun costum type
// 4.Union Type
// let id: number | string // bu usulda yozish union deyiladi
// id = 101
// console.log(id);
// id = 'a1'
// console.log(id);
// id = true // xato
// console.log(id);
// function changeObj(age: number, name: string, isMarried: string | boolean){
//     this.age = age
//     this.name = name
//     this.isMarried = isMarried
// }
// const user1 = new changeObj(16, 'Muhammadaziz', false)
// const user2 = new changeObj(16, 'Muhammadaziz', 'no')
// console.log(user1);
// console.log(user2);
// 5. Function
// function add2Number(a: number, b:number): number{
//     return a + b
// }
// console.log(add2Number(1, 2));
// 6.Literal Type
// let phone: 'iphone' | 'samsung'
// phone = 'iphone'
// console.log(phone);
// 7.Object Type
// let obj: {
//     id: number,
//     email: string,
//     password: string
// } = {
//     id: 1,
//     email: "example@email.com",
//     password: "qwert1234"
// }
// console.log(obj);
// let obj: {
//   id: number;
//   email: string;
//   password: string;
// };
// obj = {
//   id: 1,
//   email: "example@email.com",
//   password: "qwert1234",
// };
// console.log(obj);
// 8.Optional Properties
// type user = {
//     age: number,
//     name?: string
// }
// let user1: user = {age: 1}
// console.log(user1);
// 9.Readonly
// let user: {
//     readonly age: number,
//     name: string
// }
// user = {
//     age: 1,
//     name: ""
// }
// user.age = 1
// console.log(user);
// 10. Type Assertions
// let value: string | null = "Hello";
// let length1: number = (value as string).length;
// console.log(length1);

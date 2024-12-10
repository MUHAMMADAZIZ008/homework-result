"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//=====================Partial========================================
// type UserOmit = Partial<User> // partial ham obj qiymatlarini optional"ixtiyoriy qilib beradi"
// const user: UserOmit = {
//     id: 1,
//     name: "Muhammadaziz",
//     age: 16
// }
// console.log(user);
// type UserRequired = Required<User> // Required object ichidagi qiymatilarni majburiy qiladi
//=====================Readonly========================================
// type UserReadOnly = Readonly<User>; // readonly object elementlarni faqat o'qiladigon qiladi
// const user: UserReadOnly = {
//   id: 1,
//   name: "Muhammadaziz",
//   age: 16,
// };
// user.id = 1//
//=====================Pick========================================
// type UserPick = Pick<User, 'name'| 'age'> //pick faqat tanlangan elementlari declaration qilishga ruxsat beradi
// const veiwUser: UserPick ={
//     name: "Muhammadaziz",
//     age : 15
// }
//=====================Omit========================================
// type UserOmit = Omit<User, 'age'> //obyect dan berilgan key ni olib tashlay uchun
// const user: UserOmit = {
//     id: 1,
//     name: "Muhammadaziz",
//     // age: 4
// }
//=====================Omit========================================
// type Role = "admin" | "user" | "guest";
// type UserRecord = Record<Role, string> //beril
// const role: UserRecord = "adim"
//=====================Exclude========================================
// type Status = "success" | "error" | "loading";
// type newType = Exclude<Status, "error"> // uniondan geril gan qiymantni olib tashlaydi 
//=====================Extract========================================
// type Status = "success" | "error" | "loading";
// type newSttatus = Extract<Status, "success">// faqat berilgan type ni oladi
// const status: newSttatus = "success"

export class CreateUserDto {
  fullname?: string;
  email: string;
  password: string;
}
// export class CreateUserDto {
//   id?: number;
//   fullname?: string;
//   email: string;
//   password: string;

//   constructor(user: {
//     id: number;
//     fullname?: string;
//     email: string;
//     passowrd: string;
//   }) {
//     this.id = user.id;
//     this.fullname = user.fullname;
//     this.email = user.email;
//     this.password = user.passowrd;
//   }
// }

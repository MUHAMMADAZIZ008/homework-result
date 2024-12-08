"use strict";
function* createId() {
    let id = 0;
    while (true) {
        yield id++;
    }
}
class User {
    list_user;
    constructor(list_user) {
        this.list_user = list_user;
    }
    getAllUser() {
        return this.list_user;
    }
    getById(id) {
        this.list_user.forEach((user) => {
            if (user.id === id) {
                return user;
            }
        });
        return {
            message: "user not found"
        };
    }
    createUser(newUser) {
        const id = createId();
        newUser.id = id.next().value;
        this.list_user.push(newUser);
        return id;
    }
    updateUser(id, updateUser) {
        this.list_user.forEach((user) => {
            if (user.id === id) {
                user = {
                    ...user,
                    ...updateUser
                };
            }
        });
        return id;
    }
    delete(id) {
        let isDelete = false;
        for (let i = 0; i < this.list_user.length; i++) {
            if (this.list_user[i].id === id) {
                this.list_user.splice(i - 1, 1);
                isDelete = true;
            }
        }
        if (!isDelete) {
            return {
                message: "user not found"
            };
        }
        return id;
    }
}
const user1 = new User([{
        fullName: 'Muhammadaziz',
        email: 'aziz@email.com',
        password: 'qwer123'
    }]);
user1.createUser({
    fullName: 'Muhammadaziz',
    email: 'aziz@email.com',
    password: 'qwer123'
});
user1.createUser({
    fullName: 'Muhammadaziz',
    email: 'aziz@email.com',
    password: 'qwer123'
});
console.log(user1.delete(0));
// console.log(user1.getAllUser());

type userObj = {
    id?: number,
    fullName: string,
    email: string,
    password: string,
}

function* createId(): Generator<number> {
    let id: number = 0;
    while (true) {
        yield id++;
    }
}


class User {
    list_user: userObj[]
    constructor(list_user: userObj[]){
        this.list_user = list_user
    }

    getAllUser(): object[] {
        return this.list_user
    }
    getById(id: number): userObj | object{
        this.list_user.forEach((user:userObj) =>{
            if(user.id === id){
                return user
            }
        })
        return {
            message: "user not found"
        }
    }
    createUser(newUser: userObj): any{
        const id = createId()
        newUser.id = id.next().value
        this.list_user.push(newUser)
        return id
    }
    updateUser(id: number, updateUser: userObj): number{
        this.list_user.forEach((user:userObj) =>{
            if(user.id === id){
                user = {
                    ...user,
                    ...updateUser
                }
            }
        })
        return id

    }
    delete(id: number): number | object{
        let isDelete: boolean = false
        for(let i = 0; i < this.list_user.length; i++){
            if(this.list_user[i].id === id){
                this.list_user.splice(i - 1, 1)
                isDelete = true
            }
        }
        if(!isDelete){
            return {
                message: "user not found"
            }
        }
        return id
    }

}

const user1 = new User([{
    fullName: 'Muhammadaziz',
    email: 'aziz@email.com',
    password: 'qwer123'
}])
user1.createUser({
    fullName: 'Muhammadaziz',
    email: 'aziz@email.com',
    password: 'qwer123'
})
user1.createUser({
    fullName: 'Muhammadaziz',
    email: 'aziz@email.com',
    password: 'qwer123'
})
console.log(user1.delete(0))
// console.log(user1.getAllUser());

export default class UserModel {
    constructor() {
        this.Users = ["test"]
    }

    addUser(user) {
        this.Users.push(user)
    }

    getUsers() {
        return this.Users
    }

    delUser(user) {
        this.Users = this.Users.filter(u => u !== user)
    }
}


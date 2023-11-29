// user.model.js
export default class UserModel {
    constructor() {
        this.users = [];
    }

    addUser(userName) {
        const existingUser = this.users.find(user => user.name === userName);
        if (existingUser) {
            return false; // Người chơi đã tồn tại - Le joueur existe déjà
        } else {
            const newUser = { name: userName };
            this.users.push(newUser);
            return true; // Người chơi được thêm vào danh sách- Le joueur est ajouté à la liste
        }
    }

    deleteUser(userName) {
        this.users = this.users.filter(user => user.name !== userName);
    }

    getAllUsers() {
        return this.users;
    }
}

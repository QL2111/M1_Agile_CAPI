
export default class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    addUser(user) {
        this.model.addUser(user);
    }
    getUsers() {
        return this.model.getUsers();
    }
}


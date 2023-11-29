// user.controller.js
// import UserModel from './Model/UserModel.js'

export default class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Kết nối sự kiện từ view với các phương thức xử lý trong controller - Connectez les événements de la vue aux méthodes du gestionnaire dans le contrôleur
        this.view.onSubmit(this.addUser.bind(this));
        this.view.onUserClick(this.toggleSelected.bind(this));
        this.view.onDeleteClick(this.deleteUser.bind(this));

        // Hiển thị danh sách người chơi ban đầu-Affiche la liste initiale des joueurs
        this.updateUserList();
    }

    addUser(userName) {
        if (!userName) {
            this.view.showAlert('veuillez saisir un joueur.');
            return;
        }
        console.log('Ajout user:', userName);
        const added = this.model.addUser(userName);
        if (!added) {
            this.view.showAlert('Le joueur existe déjà. Veuillez saisir un autre nom.');
        } else {
            // Xóa nội dung trong ô input sau khi thêm tên -Supprimez le contenu de la zone de saisie après avoir ajouté le nom
            this.view.input.value = '';
        }
        this.updateUserList();
    }

    deleteUser() {
        const selectedUser = this.view.getSelectedUser();
        if (selectedUser) {
            this.model.deleteUser(selectedUser);
            this.updateUserList();
        }
    }

    toggleSelected(userName) {
        this.view.toggleUserSelected(userName);
    }

    updateUserList() {
        const users = this.model.getAllUsers();
        this.view.displayUsers(users);
    }
}

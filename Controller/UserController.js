/**
 * @file UserController.js
 * @description Controller des users, limitation de liste, add, suppression
 * @module UserController
 */

/**
 * @class UserController
 * @classdesc Class qui va gérer les users.
 */
export default class UserController {
    /**
     * Créer une class UserController.
     * @param {object} model - Le modèle
     * @param {object} view - La vue
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Vue
        this.view.onSubmit(this.addUser.bind(this));
        this.view.onUserClick(this.toggleSelected.bind(this));
        this.view.onDeleteClick(this.deleteUser.bind(this));

        // update
        this.updateUserList();
    }

    /**
     * Ajout d'un utilisateur
     * @param {string} userName - Nom utilisateur
     * @returns {void}
     * 
     */
    addUser(userName) {
        if (!userName) {
            this.view.showAlert('Veuillez saisir votre nom.');
            return;
        }
        //console.log('Adding user:', userName);
        const added = this.model.addUser(userName);
        if (!added) {
            this.view.showAlert('Le pseudo a déjà été pris, veullez en prendre un autre svp');
        } else {
            this.view.input.value = '';
        }
        this.updateUserList();
    }

    /**
     * Suppresion user ? à garder ?
     */
    deleteUser() {
        const selectedUser = this.view.getSelectedUser();
        if (selectedUser) {
            this.model.deleteUser(selectedUser);
            this.updateUserList();
        }
    }


    /**
     * Mis à jour de la liste des utilisateurs.
     * @returns {void}
     */
    updateUserList() {
        const users = this.model.getAllUsers();
        this.view.displayUsers(users);
    }
}
        
    

    

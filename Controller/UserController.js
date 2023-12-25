

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
     * @param {number} nbUsersMax - Nombre d'utilisateurs maximum, par défaut 4
     */
    constructor(model, view, nbUsersMax = 4) {
        this.model = model;
        this.view = view;
        this.nbUsersMax = nbUsersMax;

        // Vue
        this.view.onSubmit(this.addUser.bind(this));
        // update
        this.updateUserList();
    }
    updateNbUsersMax(nbUsersMax) {
        this.nbUsersMax = nbUsersMax;
    }

    /**
     * Ajout d'un utilisateur
     * @param {string} userName - Nom utilisateur
     * @returns {void}
     * 
     */
    addUser(userName) {
        if (!userName) {
            alert('Veuillez saisir votre nom.');
            return;
        }
        if (this.model.getAllUsers().length >= this.nbUsersMax) {
            alert('Nombre d\'utilisateurs maximum atteint.');
            return;
        }
        if (this.model.getAllUsers().length >= this.maxUsers) {
            this.view.showAlert(`Le nombre maximum d'utilisateurs (${this.maxUsers}) a été atteint.`);
            return;
        }
        //console.log('Adding user:', userName);
        const added = this.model.addUser(userName);
        if (!added) {
            alert('Le pseudo a déjà été pris, veullez en prendre un autre svp');
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
        
    

    

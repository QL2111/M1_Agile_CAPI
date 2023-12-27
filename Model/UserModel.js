// user.model.js

/**
 * Model user
 * @file UserModel.js
 * @class UserModel
 * @Prototype
 */
export default class UserModel {
    constructor() {
        this.users = [];
    }

    /**
     * Ajout utilisateur
     * @param {string} userName - pseudo
     * @returns {boolean} - retourne vrai si okay
     */
    addUser(userName) {
        const existingUser = this.users.find(user => user.name === userName);
        if (existingUser) {
            return false; 
        } else {
            const newUser = { name: userName };
            this.users.push(newUser);
            return true; 
        }
    }

    /**
     * Delete , à garder ?
     * @param {string} userName - utilisateur à supprimer
     */
    deleteUser(userName) {
        this.users = this.users.filter(user => user.name !== userName);
    }

    /**
     * getter de tout les utilisateurs
     * @returns {Array} - retourne tout els utilisateurs
     */
    getAllUsers() {
        return this.users;
    }

    /**
     * Clone la classe UserModel
     * @returns {UserModel} - une copie de la classe UserModel
     */
    clone() {
        const clonedUserModel = new UserModel();
        clonedUserModel.users = [...this.users];
        return clonedUserModel;
    }
}

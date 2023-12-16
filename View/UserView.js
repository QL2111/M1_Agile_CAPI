
// user.view.js
/**
 * @file UserView.js
 * @description Vue des utilisateur
 * @module UserView
 */

/**
 * @class UserView
 * @classdesc UserView création des éléments html
 */
export default class UserView {
    constructor() {
        this.app = this.getElement('#root');

        // Création de nos éléments
        this.title = this.createElement('h1');
        this.title.textContent = 'User Management';

        // Formulaires pour ajouter un utilisateur
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Enter player name';
        this.input.name = 'user';
        // Bouton pour envoyer le formulaire(ajout)
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';
        
        // Liste
        this.userList = this.createElement('ul', 'user-list');

        // Ajout de nos élement
        this.form.append(this.input, this.submitButton);
        this.app.append(this.title, this.form, this.userList);

        // Ajout d'un bouton Supprimer pour supprimer le joueur sélectionné( à garder ?)
        this.deleteButton = this.createElement('button', 'delete');
        this.deleteButton.textContent = 'Delete Selected';
        this.app.append(this.deleteButton);

        // Button Next - passer à l'étape suivante
        this.nextButton = this.createElement('button');
        this.nextButton.type = 'button';
        this.nextButton.textContent = 'Next';
        this.app.append(this.nextButton);
    }

    
    
    /**
     * event handler pour le form
     * @param {Function} handler - envoie du formulaire
     * @returns {void}
     * 
     */
    onSubmit(handler) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            handler(this.input.value.trim());
        });
    }
    
    onDeleteClick(handler) { 
        this.deleteButton.addEventListener('click', () => {
            handler();
        });
    }
    
    /**
     * Ajout de notre écouteur d'événement pour la liste des utilisateurs
     * @param {Function} handler - EventHandler
     * @returns {void}
     */
    onUserClick(handler) {
        this.userList.addEventListener('click', (event) => {
            const clickedUserItem = event.target.closest('.user-item');
            if (clickedUserItem) {
                handler(clickedUserItem.getAttribute('data-name'));
    
                // Thêm class 'clicked' khi click vào 'li'
                clickedUserItem.classList.add('clicked');
                
                // Lắng nghe sự kiện mouseout để xóa class 'clicked'
                clickedUserItem.addEventListener('mouseout', () => {
                    clickedUserItem.classList.remove('clicked');
                });
            }
        });
    }

      

    /**
     * Displays the list of users.
     * @param {Array} users - The array of user objects to display.
     */
    displayUsers(users) {
        this.userList.innerHTML = '';
        users.forEach(user => {
            const userItem = this.createElement('li', 'user-item');
            userItem.textContent = user.name;
            userItem.setAttribute('data-name', user.name);
            this.userList.appendChild(userItem);
        });
    }

    
    

    /**
     * Fonction pour créer un élément HTML avec un tag et la classe en paramètre
     * @param {string} tag - The HTML tag name of the element to create.
     * @param {string} [className] - The optional class name to add to the element.
     * @returns {HTMLElement} The created HTML element.
     */
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }
   
}
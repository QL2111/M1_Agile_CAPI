import CarteController from '../Controller/CarteController.js';
import CarteModel from '../Model/CarteModel.js';

export default class CarteView {
  

  constructor() {
    this.cartesUrl = ["img/cartes_0.svg","img/cartes_1.svg","img/cartes_2.svg","img/cartes_3.svg",
  "img/cartes_5.svg","img/cartes_8.svg","img/cartes_13.svg","img/cartes_20.svg",
  "img/cartes_40.svg","img/cartes_100.svg","img/cartes_cafe.svg","img/cartes_interro.svg",];
    
    this.app = this.getElement('#SectionCard');

    
    // Création de nos éléments
    // Affichage des cartes
    this.cartes = document.createElement('div');
    this.cartes.classList.add('cartes');
    // Création dde chaque carte
    this.cartesUrl.forEach(element => {
      
      let carte = document.createElement('img');
      carte.classList.add('carte');
      carte.src = element;
      this.cartes.append(carte);      
    
    });

    // Création du bouton voter
    this.voteButton = document.createElement('button');
    this.voteButton.type = 'button';
    this.voteButton.textContent = 'Voter';
    this.app.append(this.voteButton);

    // On append les cartes à la fin pour un affichage plus fin(la création de multiiples carte est dure à gérer niveau css)
    this.app.append(this.cartes);

  }

  /**
   * Méthode pour ajouter un gestionnaire d'événements pour les clics sur les cartes
   * @param {Function} handler - Gestionnaire d'événements pour les clics sur les cartes
   * @returns {void}
   */
  addClickHandler(handler) {
    this.cartes.addEventListener('click', (event) => {
      // passage de la vue à app.js
      if (event.target.classList.contains('carte')) {
        handler(event.target.src);
        // On va agrandir l'image des cartes pour la lisiblité
        event.target.classList.add('carte-zoom');
      }
      
    });
  }

  /**
   * 
   * @param {Function} handler - Gestionnaire d'événements pour les clics sur le bouton voter
   * @returns {void}
   * 
  */
  addClickHandlerVote(handler) {
    this.voteButton.addEventListener('click', (event) => {
      handler();
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


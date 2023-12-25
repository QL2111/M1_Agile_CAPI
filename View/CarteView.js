export default class CarteView {
  

  constructor(globalDifficulty, globaNbUsers) {
    this.globalDifficulty = globalDifficulty;
    this.globaNbUsers = globaNbUsers;
    this.cartesUrl = ["img/cartes_0.svg","img/cartes_1.svg","img/cartes_2.svg","img/cartes_3.svg",
  "img/cartes_5.svg","img/cartes_8.svg","img/cartes_13.svg","img/cartes_20.svg",
  "img/cartes_40.svg","img/cartes_100.svg","img/cartes_cafe.svg","img/cartes_interro.svg",];
    
    this.app = this.getElement('#SectionCard');

    
    // Création de nos éléments
    this.title = document.createElement('h1');
    this.title.textContent = 'Carte View';
    this.app.append(this.title);


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
    this.app.append(this.cartes);


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

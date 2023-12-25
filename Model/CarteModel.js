// Faire un factory pattern pour les cartes

/**
 * @file CarteModel.js
 * @description Modèle des cartes
 * @module CarteModel
 */
export default class CarteModel {
    /**
     * @param {integer} valeur - Valeur de la carte
     */
    constructor(valeur) {
        this.carte = valeur;
    }

    /**
     * getter de la carte
     * @returns {integer} - retourne la valeur de la carte
     */
    getCarte() {
        return this.carte;
    }

    /**
     * setter de la carte
     * @param {integer} valeur - set la valeur de la carte
     */
    setCarte(valeur) {
        this.carte = valeur;
    }
}

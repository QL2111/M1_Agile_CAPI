

import {mediane, moyenne} from '../calc.js';

/**
 * Controller des cartes, va aussi gérer les fonctions de sélections de cartes et de vote
 * @file CarteController.js
 * @returns {void} 
 */

/**
 * @class CarteController
 * @description - Création des cartes
 *              - Sélection des cartes
 *              - Vote
 *              - Affichage de la difficulté
 *              - Passage à la fonctionnalité suivante
 *              - Gestion des modes de jeu
 *              - Gestion des tentatives de vote
 * @param {object} CarteModel - Le modèle
 * @param {object} CarteView - La vue
 * @param {number} globalNbUsersMax - Nombre d'utilisateurs maximum, par défaut 4
 * @param {string} globalDifficulty - Difficulté, par défaut strict
 * @param {number} cptTentativesVote - Nombre de tentatives de vote, par défaut 0
 * @Singleton - On utilise le pattern singleton pour n'avoir qu'une seule instance de CarteController
 * @returns {void}
 * 
 */

export default class CarteController{

    static instance;

    /**
     * Méthode statique pour obtenir l'instance unique de CarteController
     * @returns {CarteController} - L'instance unique de CarteController
     */
    static getInstance() {
        if (!CarteController.instance) {
            CarteController.instance = new CarteController();
        }
        return CarteController.instance;
    }
    /**
     * Créer une class CarteController.
     * @param {object} CarteModel - Le modèle
     * @param {object} CarteView - La vue
     * @param {number} globalNbUsersMax - Nombre d'utilisateurs maximum, par défaut 4
     * @param {string} globalDifficulty - Difficulté, par défaut strict
     * @param {number} cptTentativesVote - Nombre de tentatives de vote, par défaut 0
     *
     */
    constructor(CarteModel, CarteView, globalNbUsersMax, globalDifficulty){
        if (CarteController.instance) {
            throw new Error("Une instance de CarteController existe déjà. Utilisez CarteController.getInstance() pour l'obtenir.");
        }
        CarteController.instance = this;
        this.model = CarteModel;
        this.view = CarteView;
        this.cartesSelectionnees = [];
        this.globalNbUsersMax = globalNbUsersMax;
        this.globalDifficulty = globalDifficulty;
        this.cptTentativesVote = 0;
    }

    /**
     * 
     * @param {integer} valeur - valeur de la carte
     */
    createCarte(valeur){
        this.model.setCarte(valeur);
    }

    /**
     * 
     * @returns {integer} - retourne la valeur de la carte
     */
    getCarte(){
        return this.model.getCarte();
    }

    /**
     * 
     * @param {integer} valeur - valeur de la carte
     * @description - Ajoute la carte à l'attribut this.cartesSelectionnees
     *              - Vérifie si tout le monde a choisi une carte et si oui, affiche un message
     *              - Vérifie que le nombre de cartes sélectionnées ne dépasse pas le nombre de joueurs
     * @returns {void}
     */
    ajouterCarteSelectionnee(carte){
        // Limite le nb de joueur
        // console.log(carte)
        
        alert("Vous avez choisi la carte : " + carte);
        
        if (this.cartesSelectionnees.length < this.globalNbUsersMax){
            this.cartesSelectionnees.push(carte);
            // console.log(this.cartesSelectionnees);
        }else{
            alert("Chaque joueur a déjà choisi une carte, veuillez passer au vote ou recommencer la partie")
        }
        if (this.cartesSelectionnees.length == this.globalNbUsersMax){
            alert("Tout le monde a choisi une carte, veuillez procéder au vote en cliquant sur le bouton 'Voter'")
        }
    }

    /**
     * 
     * @param {integer} valeur - valeur finale issue du vote
     * @description - Affiche la valeur finale du vote
     *              - Incrémente la variable globale de fonctionnalité pour passer à la suivante
     *              - Ajoute la classe fonctionnalite-active à la nouvelle fonctionnalité
     *              - Enlève la couleur rouge  et le souslignage de l'ancienne fonctionnalite
     *              - Met dans le local storage la valeur qui a été voté pour que app.js le récupère
     *              - Ecrit dans le DOM la valeur qui a été voté
     *              - Remet les tentatives de vote à 0(this.cptTentativesVote) car succès
     * 
     * @returns {void}
     */
    voteSuccess(valeurFinaleVote){
        if(this.globalDifficulty == 'strict'){
            alert("Tout le monde a choisi pareil, la difficulté estimé est : " + valeurFinaleVote + ", pour rappel vous êtes en mode strict");
        }
        alert("La difficulté estimé est : " + valeurFinaleVote + ", pour rappel votre mode de jeu est : "+ this.globalDifficulty);
        // On va incrémenter la variable globale de fonctionnalité pour passer à la suivante
        let globalFonctionnaliteCourante = localStorage.getItem('fonctionnaliteCourante');
        globalFonctionnaliteCourante = parseInt(globalFonctionnaliteCourante) + 1; // On utilise parseInt sinon ça concatène les strings
        localStorage.setItem('fonctionnaliteCourante', globalFonctionnaliteCourante);
        // Ajoutez la classe fonctionnalite-active à la nouvelle fonctionnalité
        
        let fonctionnaliteSuivante = document.getElementById(globalFonctionnaliteCourante);
        fonctionnaliteSuivante.classList.add('fonctionnalite-active');

        // On enlève la couleur rouge de l'ancienne fonctionnalite
        let fonctionnaliteAntecedante = document.getElementById(globalFonctionnaliteCourante - 1);
        fonctionnaliteAntecedante.classList.remove('fonctionnalite-active');
                    
        // On met dans le local storage la valeur qui a été voté pour que app.js le récupère
        localStorage.setItem('fonctionnaliteVote', valeurFinaleVote);

        // On n'arrive pas à sauvegarder le json, on va donc écrire dans le DOM
        let indexAncienneFonctionnalite = globalFonctionnaliteCourante - 1;
        let difficulteEstimee = document.getElementById('difficulte-' + indexAncienneFonctionnalite);
        difficulteEstimee.textContent = valeurFinaleVote;

        // On remet les tentatives de vote à 0 car succès
        this.cptTentativesVote = 0;
                
    }

    /**
     * 
     * @description - Commence toujours par le mode strict, vérife par l'attribut this.cptTentativesVote
     *              - Vérifie si tout le monde a choisi la même carte
     *             - Si oui, appelle la fonction voteSuccess
     *            - Si non, affiche un message d'erreur et incrémente le nombre de tentatives de vote
     *              -Si ce n'est pas le premier vote, et que ce n'est pas la première tentative de vote, on va gérer la médiane ou la moyenne
     *              et si le mode est médiane ou moyenne, appelle la fonction voteSuccess avec la valeur calculé de la médiane ou moyenne
     * @returns {void}
     */
    vote(){
        // On commence toujours par strict
        let firstValue = this.cartesSelectionnees[0];
        let allEqual = this.cartesSelectionnees.every(carte => carte === firstValue);
        if (!allEqual) {
            // Cas strict, on boucle jusqu'à ce que tout le monde ait choisi la même carte
            if(this.globalDifficulty == 'strict'){
                alert("Tout le monde n'a pas choisi pareil, il faut revoter, pour rappel vous êtes en mode strict");
            }

            // Cas médiane ou moyenne, on boucle jusqu'à ce que tout le monde ait choisi la même carte à part au premier tour
            if(this.globalDifficulty != 'strict' && this.cptTentativesVote == 0){
                alert("Tout le monde n'a pas choisi pareil au premier tour, il faut revoter, pour rappel votre mode de jeu est : "+ this.globalDifficulty);
            }
            // Ici si il y a déjà eu un vote, on va faire la médiane ou la moyenne 
            if(this.cptTentativesVote > 0 && this.globalDifficulty != 'strict'){
                switch (this.globalDifficulty) {
                    case 'mediane':
                        
                        this.voteSuccess(mediane(this.cartesSelectionnees));
                        
                        break;
                    case 'moyenne':
                        this.voteSuccess(moyenne(this.cartesSelectionnees));
                        break;
                    default:
                        alert("Problème, la difficulté n'a pas été choisie");
                        break;
                }
            }

            // On incrémente la tentaive de vote pour cette fonctionnalité
            this.cptTentativesVote++;

        }else{
            this.voteSuccess(firstValue);
            // On clear la liste
            this.cartesSelectionnees = [];
        }
        
        this.cartesSelectionnees = [];
    }


}
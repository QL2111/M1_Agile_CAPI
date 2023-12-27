
export default class CarteController{
    constructor(CarteModel, CarteView, globalNbUsersMax, globalDifficulty){
        this.model = CarteModel;
        this.view = CarteView;
        this.cartesSelectionnees = [];
        this.globalNbUsersMax = globalNbUsersMax;
        this.globalDifficulty = globalDifficulty;
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

    ajouterCarteSelectionnee(carte){
        // Limite le nb de joueur
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

    vote(){
        switch (this.globalDifficulty) {
            // Premier tour forcément unamimite puis on peut faire médiane ou moyenne
            case 'strict':
                let firstValue = this.cartesSelectionnees[0];
                let allEqual = this.cartesSelectionnees.every(carte => carte === firstValue);
                if (!allEqual) {
                    alert("Tout le monde n'a pas choisi pareil, il faut revoter");
                    // On clear la liste
                    this.cartesSelectionnees = [];
                }else{
                    alert("Tout le monde a choisi pareil, la difficulté estimé est : " + firstValue);
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
                    localStorage.setItem('fonctionnaliteVote', firstValue);

                    // On n'arrive pas à sauvegarder le json, on va donc écrire dans le DOM
                    let indexAncienneFonctionnalite = globalFonctionnaliteCourante - 1;
                    let difficulteEstimee = document.getElementById('difficulte-' + indexAncienneFonctionnalite);
                    difficulteEstimee.textContent = firstValue;
                
                }
                break;
            case 'mediane':
                break;
            case 'moyenne':
                break;
            default:
                alert("Problème, la difficulté n'a pas été choisie");
                break;
        }
        this.cartesSelectionnees = [];
    }

}
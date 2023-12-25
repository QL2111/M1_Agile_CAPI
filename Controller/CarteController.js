

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
            console.log(this.cartesSelectionnees);
        }else{
            alert("Chaque joueur a déjà choisi une carte, veuillez passer au vote ou recommencer la partie")
        }
        if (this.cartesSelectionnees.length == this.globalNbUsersMax){
            alert("Tout le monde a choisi une carte, veuillez procéder au vote en cliquant sur le bouton 'Voter'")
        }
    }

    vote(){
        switch (this.globalDifficulty) {
            case 'strict':
                for (let i = 0; i < this.cartesSelectionnees.length; i++) {
                    if (this.cartesSelectionnees[0] != this.cartesSelectionnees[i]){
                        alert("Tout le monde n'a pas choisi pareil, il faut revoter");
                        break;
                    }
                }   
                break;
            case 'median':
                break;
            case 'medium':
                break;
            default:
                alert("Problème, la difficulté n'a pas été choisi")
                break;
        }
    }

}
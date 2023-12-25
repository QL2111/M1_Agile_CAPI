

export default class CarteController{
    constructor(CarteModel, CarteView){
        this.model = CarteModel;
        this.view = CarteView;
        this.cartesSelectionnees = [];
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
        this.cartesSelectionnees.push(carte);
    }

}
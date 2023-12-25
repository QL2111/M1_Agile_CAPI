import UserModel from './Model/UserModel.js'
import UserView from './View/UserView.js'
import UserController from './Controller/UserController.js'
import SelectDifficulty from './Components/SelectDifficulty.js';
import CarteModel from './Model/CarteModel.js';
import CarteController from './Controller/CarteController.js';
import CarteView from './View/CarteView.js';


// TO-DO -> variables globales(local storage ?), faire la sélection de cartes(supprimer code de Duy), interface de jeu(lire le json), système de vote(avec les tests), pouvoir sauvegarder et charger avec la carte café 
// Bonus, Faire un timer 



// Variables globales
let globalDifficulty = 'medium'; //Mode par défaut
let globalNbUsersMax = 0; //Nombre d'utilisateurs maximum

// ########################################
// ######### Gestion Menu ###########
// ########################################

if(window.location.pathname === '/') {
    const userView = new UserView();
    const userModel = new UserModel();
    const userController = new UserController(userModel, userView);
    // Ajoutez un gestionnaire pour le formulaire de choix du nombre d'utilisateurs
    userView.onNbUserFormSubmit((nbUsers) => {
        console.log('Nombre d\'utilisateurs choisi par l\'utilisateur:', nbUsers);
        globalNbUsersMax = nbUsers;
        localStorage.setItem('nbUsersMax', nbUsers);
        // Mis à jour du nombre d'utilisateurs maximum
        userController.updateNbUsersMax(nbUsers);
    });

    // Choix de la difficulté

    const updateGlobalDifficulty = (newDifficulty) => {
        globalDifficulty = newDifficulty;
        localStorage.setItem('difficulty', newDifficulty);
        console.log('Difficulté globale : ', globalDifficulty);
    };
    const selectDifficulty = SelectDifficulty(updateGlobalDifficulty)
    document.getElementById('root').appendChild(selectDifficulty);

}



// ########################################
// ######### Gestion des cartes ###########
// ########################################


if(window.location.pathname === '/cartes.html') {
    // On récupère dans le local storage et on envoie dans la vue
    globalNbUsersMax = localStorage.getItem('nbUsersMax');
    globalDifficulty = localStorage.getItem('difficulty');
    const carteView = new CarteView(globalNbUsersMax, globalDifficulty);
    const carteModel = new CarteModel();
    const carteController = new CarteController(carteModel, carteView);
    document.getElementById('root').appendChild(carteView);


    console.log('Difficulté cartes : ', globalDifficulty);
    console.log('Nombre utilisateur cartes : ', globalNbUsersMax);
}

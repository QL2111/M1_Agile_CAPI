/**
 * Fichier principal de l'application
 * @file app.js
 * @description - Gestion du menu
 *              - Gestion des cartes
 *              - Gestion des utilisateurs
 *              - Gestion des fonctionnalités
 *              - Gestion des difficultés
 *              - Gestion des votes
 *              - Gestion des variables globales(localStorage), difficulté, nombre d'utilisateurs, fonctionnalité courante, fonctionnalité vote
 *              - Lecture du json et affichage du backlog
 *              - Routage avec window.location.pathname
 * 
 */

import UserModel from './Model/UserModel.js'
import UserView from './View/UserView.js'
import UserController from './Controller/UserController.js'
import SelectDifficulty from './Components/SelectDifficulty.js';
import CarteModel from './Model/CarteModel.js';
import CarteController from './Controller/CarteController.js';
import CarteView from './View/CarteView.js';


// Variables globales
let globalDifficulty = 'medium'; //Mode par défaut
let globalNbUsersMax = 0; //Nombre d'utilisateurs maximum
if (localStorage.getItem('fonctionnaliteCourante') == null){
    let globalFonctionnaliteCourante = 0; //Fonctionnalité courante
    localStorage.setItem('fonctionnaliteCourante', globalFonctionnaliteCourante);
}
let valeurFonctionnaliteVote = null; // null par défaut, on changera après le vote
let fonctionnalitesJSON = null;
localStorage.setItem('fonctionnaliteVote', valeurFonctionnaliteVote);


// ########################################
// ######### Gestion Menu ###########
// ########################################

if(window.location.pathname === '/') {
    
    // Choix de la difficulté

    const updateGlobalDifficulty = (newDifficulty) => {
        globalDifficulty = newDifficulty;
        localStorage.setItem('difficulty', newDifficulty);
        console.log('Difficulté globale : ', globalDifficulty);
    };
    const selectDifficulty = SelectDifficulty(updateGlobalDifficulty)

    document.getElementById('root').appendChild(selectDifficulty);

    const userView = new UserView();
    const userModel = new UserModel();
    
    const userController = UserController.getInstance(userModel, userView);
    // Ajoutez un gestionnaire pour le formulaire de choix du nombre d'utilisateurs
    userView.onNbUserFormSubmit((nbUsers) => {
        console.log('Nombre d\'utilisateurs choisi par l\'utilisateur:', nbUsers);
        globalNbUsersMax = nbUsers;
        localStorage.setItem('nbUsersMax', nbUsers);
        // Mis à jour du nombre d'utilisateurs maximum
        userController.updateNbUsersMax(nbUsers);
        alert("Vous avez choisi le nombre d'utilisateurs : " + nbUsers);
    });


}



// ########################################
// ######### Gestion des cartes ###########
// ########################################


if(window.location.pathname === '/cartes.html') {
    // On récupère dans le local storage et on envoie dans la vue
    globalNbUsersMax = localStorage.getItem('nbUsersMax');
    globalDifficulty = localStorage.getItem('difficulty');
    const carteView = new CarteView();
    // Pas besoin de model pour les cartes ? On a juste une valeur simple
    const carteModel = new CarteModel();
    const carteController = CarteController.getInstance(carteModel, carteView, globalNbUsersMax, globalDifficulty);


    console.log('Difficulté cartes : ', globalDifficulty);
    console.log('Nombre utilisateur cartes : ', globalNbUsersMax);

    // JSON
    fetch('fonctionnalites.json')
    .then(function(response){
    return response.json();
    })
    .then(function(fonctionnalites){
        fonctionnalitesJSON = fonctionnalites;
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let i = 0; i < fonctionnalites.length; i++){
            let fonctionnalite = fonctionnalites[i];
            out += `
                <tr id="${i}">
                    <td>${fonctionnalite.role}</td>
                    <td>${fonctionnalite.fonctionnalite}</td>
                    <td>${fonctionnalite.but}</td>
                    <td id="difficulte-${i}">${fonctionnalite.difficulteEstimee}</td>
                </tr>
            `;
        }
        
        placeholder.innerHTML = out;
        // console.log(fonctionnalites);
        let fonctionnaliteActive = document.getElementById(localStorage.getItem('fonctionnaliteCourante'));
        console.log(fonctionnaliteActive);
        fonctionnaliteActive.classList.add('fonctionnalite-active');

        
    });


    // Ajoutez un gestionnaire pour les clics sur les cartes
    carteView.addClickHandler((carteSrc) => {
        let value = carteSrc.split('_')[1].split('.')[0];
        // console.log(value);
        carteController.ajouterCarteSelectionnee(value);
    });

    // Ajoutez un gestionnaire pour le bouton voter
    carteView.addClickHandlerVote(() => {
        carteController.vote();

        // On met à jour la difficulté de la fonctionnalité courante(par défaut ça sera null donc on ne mettra pas à jour à part si le vote à bien été passer)
        valeurFonctionnaliteVote = localStorage.getItem('fonctionnaliteVote');
        console.log('Fonctionnalité courante : ', fonctionnalitesJSON[localStorage.getItem('fonctionnaliteCourante')]);
        // On applique la modification dans le tableau
        fonctionnalitesJSON[localStorage.getItem('fonctionnaliteCourante')].difficulteEstimee = valeurFonctionnaliteVote;
        // On va écrire dans le json
        let data = JSON.stringify(fonctionnalitesJSON, null, 2);
        console.log('data',data);
        // fs.writeFile('fonctionnalites.json', data, finished);

        // On remet la valeurFonctionnaliteVote à null pour le prochain vote
        localStorage.setItem('fonctionnaliteVote', null);


        
        // Pour pouvoir revoter on enlève la classe zoom à tout ceux qui possèdent
        const carteElements = document.getElementsByClassName('carte-zoom');
        while (carteElements.length > 0) {
            carteElements[0].classList.remove('carte-zoom');
        }
    });

    

}

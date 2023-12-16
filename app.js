import UserModel from './Model/UserModel.js'
import UserView from './View/UserView.js'
import UserController from './Controller/UserController.js'
import SelectDifficulty from './Components/SelectDifficulty.js';
import CarteView from './View/CarteView.js';

const userView = new UserView();
const userModel = new UserModel();
const userController = new UserController(userModel, userView);
// Ajoutez un gestionnaire pour le formulaire de choix du nombre d'utilisateurs
userView.onNbUserFormSubmit((nbUsers) => {
    console.log('Nombre d\'utilisateurs choisi par l\'utilisateur:', nbUsers);
    // Mis à jour du nombre d'utilisateurs maximum
    userController.updateNbUsersMax(nbUsers);
});
const selectDifficulty = SelectDifficulty();
document.getElementById('root').appendChild(selectDifficulty);


if(window.location.pathname === '/cartes.html') {
    const carteView = CarteView();
    document.getElementById('root').appendChild(carteView);
}

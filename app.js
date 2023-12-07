import UserModel from './Model/UserModel.js';
import UserView from './View/UserView.js';
import UserController from './Controller/UserController.js';
import SelectDifficulty from './Components/SelectDifficulty.js';
import CarteView from './View/CarteView.js';

 
const userView = new UserView();
const userModel = new UserModel();
const userController = new UserController(userModel, userView);
const selectDifficulty = SelectDifficulty();
document.getElementById('root').appendChild(selectDifficulty);
const carteView = CarteView();
document.getElementById('root').appendChild(carteView) ;

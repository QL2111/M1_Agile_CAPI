import UserModel from './Model/UserModel.js';
import UserView from './View/UserView.js';
import UserController from './Controller/UserController.js';
import SelectDifficulty from './Components/SelectDifficulty.js';
import CarteView from './View/CarteView.js';
// import DifficulteModel from './Model/DifficulteModel.js';
// import DifficulteView from './View/DifficulteView.js';
// import DifficulteController from './Controller/DifficulteController.js';

 
const userView = new UserView();
const userModel = new UserModel();
const userController = new UserController(userModel, userView);
const selectDifficulty = SelectDifficulty();
document.getElementById('root').appendChild(selectDifficulty);
// const carteView = CarteView();
// document.getElementById('root').appendChild(carteView) ;
// const difficulteView = new DifficulteView();
// const difficulteModel = new DifficulteModel();
// const difficulteController = new DifficulteController(difficulteModel,difficulteView);
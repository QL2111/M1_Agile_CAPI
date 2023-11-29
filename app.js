import UserModel from './Model/UserModel.js'
import UserView from './View/UserView.js'
import UserController from './Controller/UserController.js'

const userView = new UserView();
const userModel = new UserModel();
const userController = new UserController(userModel, userView);

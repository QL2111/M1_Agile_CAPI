import UserModel from './Model/UserModel.js'
import UserView from './View/UserView.js'
import UserController from './Controller/UserController.js'

const MonUserController = new UserController(new UserModel(), new UserView())
console.log(MonUserController)
MonUserController.addUser('Quentin')
console.log(MonUserController.getUsers())

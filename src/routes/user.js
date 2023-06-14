const express = require("express");

const userController = require("../controllers/user");

const Router = express.Router();

Router.post("/register",  userController.createUser);

Router.put("/update/:id", userController.updateUser);
Router.delete("/delete/:id", userController.deleteUser);
Router.get('/user/:id', userController.getUserById);


module.exports = Router;

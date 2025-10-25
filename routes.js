const express = require('express')
const userController = require('./controllers/userController')


const route = new express.Router()

route.post('/signup', userController.signUpController)

route.post('/signin', userController.signInController)

module.exports = route
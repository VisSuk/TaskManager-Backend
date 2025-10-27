const express = require('express')
const userController = require('./controllers/userController')
const taskController = require('./controllers/taskController')

const jwt = require('./middlewares/jwtMiddleware')


const route = new express.Router()

route.post('/signup', userController.signUpController)

route.post('/signin', userController.signInController)

route.post('/createtask', jwt, taskController.createTaskController)

route.get('/gettasks', jwt, taskController.getTasksController)

route.get('/viewtask/:taskId', jwt, taskController.viewTaskController)

module.exports = route
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    creatorEmail:{
        type:String,
        required:true
    }

})

const tasks = mongoose.model("tasks", taskSchema)

module.exports = tasks
const tasks = require("../modal/taskModal")

exports.createTaskController = async (req, res) => {

    console.log("inside create task controller")
    const userMail = req.payload
    // console.log(userMail)
    const { title, description, priority, dueDate } = req.body
    // console.log(title, description, priority, dueDate)

    try {

        const existingTask = await tasks.findOne({ title, creatorEmail: userMail })

        if (existingTask) {
            res.status(406).json("Task Already Exists!")
        }
        else {

            const newTask = new tasks({
                title,
                description,
                priority,
                dueDate,
                creatorEmail: userMail
            })
            await newTask.save()
            res.status(200).json(newTask)

        }

    } catch (error) {
        res.status(500).json("Something Went Wrong")
    }

}

exports.getTasksController = async (req, res) => {

    const userMail = req.payload

    try {

        const userTasks = await tasks.find({ creatorEmail: userMail })
        res.status(200).json(userTasks)

    } catch (error) {
        res.status(500).json("Something went wrong")
    }

}

exports.viewTaskController = async (req, res) => {

    // console.log("Inside View Task Controller")
    const { taskId } = req.params
    // console.log(taskId)
    try {
        const existingTask = await tasks.findOne({ _id: taskId })
        res.status(200).json(existingTask)
    } catch (error) {
        res.status(500).json(error)
    }


} 
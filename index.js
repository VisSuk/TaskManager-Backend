require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection')
const routes = require('./routes')




const taskManagerServer = express()
taskManagerServer.use(cors)
taskManagerServer.use(express.json())
taskManagerServer.use(routes)



const PORT = 4000 || process.env.PORT





taskManagerServer.listen( PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
} )
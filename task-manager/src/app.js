const express = require('express')
const taskRouter = require('./routers/task.js')
const userRouter = require('./routers/user.js')
const app = express()
require('./db/mongoose.js')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app
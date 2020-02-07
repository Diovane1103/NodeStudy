const express = require('express')

const taskRouter = require('./routers/task.js')
const userRouter = require('./routers/user.js')
require('./db/mongoose.js')

const app = express()
const port = process.env.PORT || 3500

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up in ', port)
})
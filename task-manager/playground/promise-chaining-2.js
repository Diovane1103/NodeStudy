require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

const deleteTaskAndCount = async (id, completed) => {
    const taskDeleted = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed }) 

    return count
}

deleteTaskAndCount('5e3c6b4bc02f967407e3ec66', false)
        .then((count) => {
            console.log(count)
        }).catch((error) => {
            console.log(error)
        })
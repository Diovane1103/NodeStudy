require('../src/db/mongoose.js')
const User = require('../src/models/user.js')

// User.findByIdAndUpdate('5e3c6e7528135c784d38530e', { age: 1 })
//     .then((user) => {
//         console.log(user)
//         return User.countDocuments({ age: 1 })
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count;
}

updateAgeAndCount('5e3c6e7528135c784d38530e', 2)
        .then((count) => {
            console.log(count)
        }).catch((error) => {
            console.log(error)
        })
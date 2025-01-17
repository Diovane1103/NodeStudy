const request = require('supertest')
const app = require('../src/app.js')
const Task = require('../src/models/task.js')
const { userOne, setupDatabase, taskOne, userTwo } = require('./fixtures/db.js')

beforeEach(setupDatabase)

test('Should create a task to authorizated user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'Go to office'
        }).expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should return only the authorized tasks user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should fail to delete task that is not his owner', async () => {
    await request(app)
         .delete(`/tasks/${taskOne._id}`)
         .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
         .send()
         .expect(404)

    const task = await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
})
const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '../public/')

app.use(express.static(publicPath))

app.get('/weather', (req, res) => {
    res.send({
        location: 'Porto Alegre',
        forecast: 'It`s extremely hot',
        temperature: 35.9
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000 !!')  
})
const express = require('express')
const {getEnvironments,  getEnvironmentsByID, putEnvironments} = require('./services/environment.services')
const app = express()


app.get('/', (req, res) => {
    let result = getEnvironments()
    res.status(200).send(result)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    let result = getEnvironmentsByID(id)
    res.send(result)
})

app.post('/', (req, res) => {
    let result = getEnvironments()
    res.status(200).send(result)
})

app.put('/:id', (req, res) => {
    const { id } = req.params
    let result = putEnvironments(id)
    res.send(result)
})


app.listen(3000, () => console.log('server is running'));
const express = require('express');
const bodyParser = require("body-parser");
const {
    getEnvironment,
    getEnvironmentById,
    createEnvironment,
    updateEnvironments,
    deleteEnvironments,
    patchEnvironments
} = require('./services/environment.services');

const app = express()

app.use(bodyParser.json());


app.get('/', (req, res) => {
    try {
        const environment = getEnvironment()
        res.status(200).send(environment)
    } catch (error) {
        res.status(500).send(`error GET:${error.message}`)
    }
})

app.get('/:id', (req, res) => {
    try {
        const {
            id
        } = req.params;
        const environment = getEnvironmentById(id)
        res.status(200).send(environment)
    } catch (error) {
        res.status(500).send(`error GET:${error.message}`)
    }
})

app.post('/', (req, res) => {
    try {
        const {
            label,
            category,
            priority
        } = req.body
        const environments = createEnvironment(label, category, priority)
        res.status(200).send(environments)
    } catch (error) {
        res.status(500).send(`error POST:${error.message}`)
    }
})

app.put('/:id', (req, res) => {
    try {
        const {
            id
        } = req.params;

        const {
            label,
            category,
            priority
        } = req.body
        const environments = updateEnvironments(id, label, category, priority)
        res.status(200).send(environments)
    } catch (error) {
        res.status(500).send(`error PUT:${error.message}`)
    }

})

app.delete('/:id', (req, res) => {
    try {
        const {
            id
        } = req.params;
        const environments = deleteEnvironments(id)
        res.status(200).send(environments)

    } catch (error) {
        res.status(500).send(`error DELETE:${error.message}`)
    }
})

app.patch('/:id', (req,res)=>{
    const {id}= req.params
    const environments = patchEnvironments(id, req.body)
    res.status(200).send(environments)

})

module.exports = app;
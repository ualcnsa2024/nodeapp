const express = require('express')
const HelloWordService = require( "./hello-world" );

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:nameToSalute', (req, res) => {
  res.send(new HelloWordService().greet(req.params.nameToSalute));
})

module.exports = app
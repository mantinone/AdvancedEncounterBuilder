const path = require('path')
const express = require('express')
const app = express()

const characters = require('./routes/characters.js')

//app.use( express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/characters', characters )
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get( '/data', (request, response) => response.send( testData ))

app.listen( 3000, () => console.log("Listening on port 3000 "))
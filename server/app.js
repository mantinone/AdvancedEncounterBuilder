const express = require('express')
const app = express()

let testData = {
  AC: 15,
  STR: [2, true],
  DEX: [2, false],
  CON: [1, false],
  INT: [-1, false],
  WIS: [0, false],
  CHA: [3, true]
  }

app.use( express.static('dist'))

app.get('/', (request, response) => {
  response.send("Express time")
})

app.get( '/data', (request, response) => response.send( testData ))

app.listen( 3000, () => console.log("Listening on port 3000 "))
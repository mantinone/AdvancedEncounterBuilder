var express = require ('express')
var router = express.Router()


const makeTestCharacter = (name, ac, attackBonus, str, dex, con, int, wis, cha) => {
  return { name, ac, attackBonus, str, dex, con, int, wis, cha }
}

const testData = {
  characterList: [
    makeTestCharacter( 'Alice', 13, 5, -1, 2, 0, 3, 1, 5 ),
    makeTestCharacter( 'Rosa', 19, 6, 4, 1, 3, 1, 1, 4),
    makeTestCharacter( 'Arias', 13, 6, -1, 1, 0, 5, 1, 6)
  ]
}

router.get( '/', (request, response) => {
  response.send( testData )
})

router.get( '/monsters', (request, response) => {
  response.send( testData )
})

module.exports = router
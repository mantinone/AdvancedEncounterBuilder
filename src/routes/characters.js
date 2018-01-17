var express = require ('express')
var router = express.Router()


const makeTestCharacter = (name, ac, attackBonus, str, dex, con, int, wis, cha) => {
  return { name, ac, attackBonus, str, dex, con, int, wis, cha }
}

const testCharacters = {
  characterList: [
    makeTestCharacter( 'Alice', 13, 5, -1, 2, 0, 3, 1, 5 ),
    makeTestCharacter( 'Rosa', 19, 6, 4, 1, 3, 1, 1, 4),
    makeTestCharacter( 'Arias', 13, 6, -1, 1, 0, 5, 1, 6)
  ]
}

const testMonsters = {
  characterList: [
    makeTestCharacter( 'Goblin', 15, 5, -1, 3, 0, -1, 2, 0 ),
    makeTestCharacter( 'Dragon', 23, 9, 6, 3, 6, 4, 4, 6),
    makeTestCharacter( 'Beholder', 12, 8, 0, 0, 2, 6, 4, 5)
  ]
}

router.get( '/', (request, response) => {
  response.send( testCharacters )
})

router.get( '/monsters', (request, response) => {
  response.send( testMonsters )
})

module.exports = router
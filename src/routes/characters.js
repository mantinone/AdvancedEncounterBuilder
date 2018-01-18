var express = require ('express')
var router = express.Router()


const makeTestCharacter = (name, type, ac, attackBonus, savedc, str, dex, con, int, wis, cha) => {
  return { name, type, ac, attackBonus, savedc, str, dex, con, int, wis, cha }
}

const testCharacters = {
  characterList: [
    makeTestCharacter( 'Alice', 'Warlock', 13, 5, 15, -1, 2, 0, 3, 1, 5 ),
    makeTestCharacter( 'Rosa', 'Paladin', 19, 6, 14, 4, 1, 3, 1, 1, 4),
    makeTestCharacter( 'Arias', 'Warlock', 13, 6, 16, -1, 1, 0, 5, 1, 6)
  ]
}

const testMonsters = {
  characterList: [
    makeTestCharacter( 'Goblin', 'Monster', 15, 5, 0, -1, 3, 0, -1, 2, 0 ),
    makeTestCharacter( 'Dragon', 'Monster', 23, 9, 12, 6, 3, 6, 4, 4, 6),
    makeTestCharacter( 'Beholder', 'Monster', 12, 8, 11, 0, 0, 2, 6, 4, 5)
  ]
}

router.get( '/', (request, response) => {
  response.send( testCharacters )
})

router.get( '/monsters', (request, response) => {
  response.send( testMonsters )
})

module.exports = router
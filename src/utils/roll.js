const clampPercent = ( value, min = 0, max=100 ) => {
  return Math.max( min, Math.min( value, max ))
}

const rollProbability = ( dc, bonus, isAttack=false) => {
  var max = isAttack ? 95 : 100
  var min = isAttack ? 5 : 0

  var total = (21 - dc + bonus)*5
  return clampPercent(  total , min, max )
}

module.exports = { rollProbability }
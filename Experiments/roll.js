clampPercent = ( value, min = 0, max=100 ) => {
  return Math.max( min, Math.min( value, max ))
}

rollProbability = ( dc, bonus, isAttack=false) => {
  var max = isAttack ? 95 : 100
  var min = isAttack ? 5 : 0

  var total = (21 - dc + bonus)*5
  return clampPercent(  total , min, max )
}

var counter = 0

document.addEventListener("DOMContentLoaded", function(event) {

    var button = document.getElementById('calculate')
    button.addEventListener('click', () => {
      var dc = parseInt( document.getElementById('DC').value )
      var bonus = parseInt( document.getElementById('Bonus').value )
      var result = document.getElementById('result')
      var attack = document.getElementById('Attack').checked

      console.log('Attack', attack);
      counter++
      var chances = rollProbability( dc, bonus, attack )
      result.innerText = `Chances are: %${chances}`
      result.innerHtml += `<br><h1>This is header number ${counter}</h1>`
    })
});


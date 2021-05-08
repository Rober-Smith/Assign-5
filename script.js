let diameter = 0
let number = 0

document.getElementById('calculate').addEventListener('click', buttonOne)
document.getElementById('calculate').addEventListener('click', buttonTwo)

function buttonOne () {
  diameter = document.getElementById('d').value
  diameter = parseInt(diameter)
  number = 3.14 * diameter

  alert(number)
}

function buttonTwo () {
  diameter = document.getElementById('d').value
  diameter = parseInt(diameter)
  number = ( 3.14 * ( diameter * diameter) / 4) 

  alert(number)
}

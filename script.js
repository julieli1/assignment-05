document.getElementById('calculate').addEventListener('click', math)

let diameter = 0
let area = 0
let circumference = 0
let alphabet = false
let negative = false
const pi = 3.14

function math () {
  diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  area = 0
  circumference = 0
  alphabet = false
  negative = false

  // this tells you not to use negative numbers
  if (diameter < 0) {
    document.getElementById('alert').innerHTML = 'please use positive numbers'
  }

  // tells you not to use letters (i'm especially proud of this)
  if (diameter = /[a-zA-Z]/) {
    alphabet = !false
  }
  if (alphabet = !false) {
    document.getElementById('alert').innerHTML = 'please enter a numerical value'
  }

  area = ((diameter / 2) ^ 2) * pi
  document.getElementById('answer').innerHTML = 'area: ' + area + ' cm'

}

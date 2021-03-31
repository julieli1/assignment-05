document.getElementById('calculate').addEventListener('click', math)

let diameter = 0
let area = 0
let circumference = 0
const pi = 3.14

function math () {
  diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  area = 0
  circumference = 0
  alphabet = false

  // this tells you not to use negative numbers
  if (diameter < 0) {
    document.getElementById('alert').innerHTML = 'please use positive numbers'
  }

  // tells you not to use letters
  if (isNaN(diameter)) {
    document.getElementById('alert').innerHTML = 'please enter a numerical value'
  }

  while (diameter > 0) {
  area = ((diameter / 2) * (diameter / 2)) * pi
  circumference = pi * diameter
  document.getElementById('answera').innerHTML = 'area: ' + area
  document.getElementById('answerc').innerHTML = 'circumference: ' + circumference 
  }
}

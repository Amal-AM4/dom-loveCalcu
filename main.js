const userOne = document.getElementById('userOne')
const userTwo = document.getElementById('userTwo')

const btn = document.getElementById('btn')

const result = document.getElementById('result')
const message = document.getElementById('message')

function capitalizedName(name) {
  let firstLetter = name[0].toUpperCase()
  let restOfLetter = name.slice(1).toLowerCase()

  let completeName = firstLetter + restOfLetter
  return completeName
}


function calcLove() {

  if(userOne.value === '' || userTwo === '') {
    result.textContent = "Enter both Names 🩻"
    message.textContent = ''
    return
  }
  

  let n1 = capitalizedName(userOne.value.trim())
  let n2 = capitalizedName(userTwo.value.trim())

  let percentage = Math.floor(Math.random() * 100) + 1

  result.innerHTML = `${n1} 💗 ${n2} = <b style='color: red;'>${percentage}%</b>`

  let msg = ''

  if (percentage > 90) msg = 'Perfect match! Soulmate vibe 🥰'
  else if (percentage > 75) msg = 'Strong bond! Lots of chemistry💖💗'
  else if (percentage > 50) msg = 'Good Connection! Can grow stronger 😻💘'
  else msg = 'Needs understanding and communication'

  message.textContent = msg

  userOne.value = ''
  userTwo.value = ''
  
}


btn.addEventListener('click', calcLove)
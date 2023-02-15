console.info('Starting...')

const switcher = document.querySelector('#switcher')
const menu = document.querySelector('#menu')


function clickedButton(event) {
  const button =
    event.target.nodeName === 'BUTTON'
      ? event.target
      : event.target.parentElement

  const parent = button.parentElement

  cleanActive(parent)
  setActive(button)
}

function cleanActive(buttonParent) {
  const buttons = buttonParent.querySelectorAll('button')
  buttons.forEach(button => button.classList.remove('active'));
}

function setActive(button) {
  button.classList.add('active')
}


menu.querySelectorAll('button').forEach(button => {
  button.onclick = event => {
    clickedButton(event)
  }
})

switcher.querySelectorAll('button').forEach(button => {
  button.onclick = event => {
    clickedButton(event)
  }
})



const gridButton = switcher.querySelector('#grid-layout')
const rowButton = switcher.querySelector('#row-layout')
const contentArea = document.querySelector('#content')

gridButton.addEventListener('click', () => {
    contentArea.classList.remove('row')
    contentArea.classList.add('grid')
})

rowButton.addEventListener('click', () => {
    contentArea.classList.remove('grid')
    contentArea.classList.add('row')
})

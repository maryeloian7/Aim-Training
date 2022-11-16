"use strict"

const startDtn = document.querySelector('#start')
const screens= document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl =document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#FF89D8', '#FF56C1', '#FFBE73', '#FF9421', '#74F5A5', '#1EE76A', '#AAE4FF', '#0090ED']


let time = 0
let score = 0

startDtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event)=> {
    if(event.target.classList.contains('time-btn')){
       time = parseInt(event.target.getAttribute('data-time'))
       screens[1].classList.add('up')
       startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRendomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRendomCircle() 
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0){
        finishGame()
    } else {
        let current = --time
        if (current < 10){
        current = `0${current}`
    }
    timeEl.innerHTML = `00:${current}`
    }  
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRendomCircle() {
    const circle = document.createElement('div')
    const size = getRanNum(10 ,60)
    const {width,height} = board.getBoundingClientRect()
    const x = getRanNum(0, width - size)
    const y = getRanNum(0, height - size)
    circle.classList.add('circle')
    circle.style.width= `${size}px`
    circle.style.height= `${size}px`
    circle.style.top= `${y}px`
    circle.style.left= `${x}px`
    circle.style.background = getColor ()
    
    board.append(circle)
}

function getRanNum(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function getColor () {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
        }
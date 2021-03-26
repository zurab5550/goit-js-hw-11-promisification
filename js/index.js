const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"]

let intervalId = null
const mainBody = document.querySelector("body")
const buttonStart = document.querySelector(".button-start")
const buttonStop = document.querySelector(".button-stop")

const firstElem = 0
const lastElem = colors.length - 1

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

buttonStart.addEventListener("click", onClick)

function onClick() {
  buttonStart.removeEventListener("click", onClick)

  intervalId = setInterval(() => {
    mainBody.style.background = colors[randomIntegerFromInterval(firstElem, lastElem)]
  }, 1000)
}

buttonStop.addEventListener("click", function () {
  clearInterval(intervalId)
  buttonStart.addEventListener("click", onClick)
})

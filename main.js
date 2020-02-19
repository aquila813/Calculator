const numberButtons =  document.querySelectorAll(".num")
const operationButtons = document.querySelectorAll(".op")
const acButton = document.querySelector(".ac")
const delButton = document.querySelector(".del")
const equalsButton = document.querySelector(".equals")
const prevOpContainer = document.querySelector(".prev-op")
const currentOpContainer = document.querySelector(".current-op")


const calc = new Calc(prevOpContainer, currentOpContainer)


const appendDigitsAction = numberButtons.forEach(function(button) {
	button.addEventListener("click", function() {
		calc.appendDigit(button.innerHTML)
		calc.updateScreen()
	})
})


const operationSelection = operationButtons.forEach(function(button) {
	button.addEventListener("click", function() {
		calc.operationSelector(button.innerHTML)
		calc.updateScreen()
	})
})


acButton.addEventListener("click", function() {
	calc.clear()
	calc.updateScreen()
})


delButton.addEventListener("click", function() {
	calc.del()
	calc.updateScreen()
})


equalsButton.addEventListener("click", function() {
	calc.calculate()
	calc.updateScreen()
})
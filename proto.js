class Calc {
	constructor(prevOpContainer, currentOpContainer) {
		this.prevOpContainer = prevOpContainer
		this.currentOpContainer = currentOpContainer
		this.clear()
	}

	clear() {
		this.prevOpTxt = ""
		this.currentOpTxt = ""
		this.operation = ""
	}


	del() {
		this.currentOpTxt = this.currentOpTxt.toString().slice(0, -1)
	}


	appendDigit(digit) {
		if (digit === "." && this.currentOpTxt.includes(".")) return
		this.currentOpTxt = this.currentOpTxt.toString() + digit.toString()

	}


	operationSelector(operation) {
		this.calculate()
		this.operation = operation
		this.prevOpTxt = this.currentOpTxt
		this.currentOpTxt = ""
	}


	calculate() {
		let calculation 
		let prev = parseFloat(this.prevOpTxt)
		let current = parseFloat(this.currentOpTxt)
		if (isNaN(prev) || isNaN(current)) return
		switch(this.operation) {
			case "+":
				calculation = prev + current
				break
			case "-":
				calculation = prev - current
				break
			case "x":
				calculation = prev * current
				break
			case "÷":
				calculation = prev / current
				break
			default: return

		}

		this.currentOpTxt = calculation
		this.operation = ""
		this.prevOpTxt = ""


	}

	updateScreen() {
		this.currentOpContainer.innerHTML = this.currentOpTxt
		if (this.operation !== null) {
			this.prevOpContainer.innerHTML = this.prevOpTxt + " " + this.operation
		}

	}

}
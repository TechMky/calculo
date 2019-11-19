import { isSafeNumber, canAppendOperator, isMathExpression } from "./js/validation.js";

export default class App {
    
    constructor(params){
        this.expression = ""
        this.numericPads = document.querySelectorAll('.numeric')
        this.display = document.getElementById('display') 
        this.operatorPads = document.querySelectorAll('.operator')
        this.equalButton = document.getElementById('equals')
        this.decimalButton = document.getElementById('decimal')
    }
    initialize (param) {

       this.numericPads.forEach(element => {
           element.addEventListener('click', this.handleNumericClick.bind(this))
       })

       this.operatorPads.forEach(element => {
           element.addEventListener('click', this.handleOperatorClick.bind(this))
       })

       this.equalButton.addEventListener('click', this.handleEqualClick.bind(this))

       this.decimalButton.addEventListener('click', this.handleDecimalClick.bind(this))
    }

    handleNumericClick (event) {
        let number = event.currentTarget.children[0].textContent
        if(isSafeNumber(number))
            this.setExpression(number)
        else
            alert("Number Limit Exceeded.")
    }

    handleOperatorClick (event) {
        let operator = event.currentTarget.children[0].textContent
        if(canAppendOperator(this.expression, operator))
            this.setExpression(operator)
        else
            alert("Not a valid Math Expression.")
    }

    handleEqualClick (event){
        if (isMathExpression(this.expression)) {
            this.setExpression(math.evaluate(this.expression), true)
        }else{
            alert("Not a valid Math Expression.")
        }
    }

    handleDecimalClick (event){
        
    }

    updateDisplay(){
        this.display.textContent = this.expression;
    }

    setExpression(expression, isResult){
        if(isResult){
            this.expression = expression
        }
        else{
            this.expression += expression
        }
        this.updateDisplay()
    }

}
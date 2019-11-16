export default class App {
    re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    constructor(params){
        this.expression = ""
        this.numericPads = document.querySelectorAll('.numeric')
        this.display = document.getElementById('display') 
    }
    initialize (param) {

       this.numericPads.forEach(element => {
           element.addEventListener('click', this.handleNumericClick.bind(this))
       })
    }

    handleNumericClick (event) {
        let number = event.currentTarget.children[0].textContent
        this.updateDisplay(number)
    }

    updateDisplay(expression){
        if(this.setExpression(expression) == true){
            this.display.textContent = this.expression;
        }
    }

    setExpression(expression){
        if( (expression < Number.MAX_SAFE_INTEGER && this.expression < Number.MAX_SAFE_INTEGER ) 
            && (this.expression > Number.MIN_SAFE_INTEGER && expression > Number.MIN_SAFE_INTEGER)
            && this.isMathExpression(expression) && this.isMathExpression(this.expression) ){
            this.expression += expression
            return true
        }//else if(this.isMathExpression(expression)){
        //     this.expression += expression
        //     return true
        else{
            return false
        }
    }

    isMathExpression(expression){
        return this.re.test(expression)
    }
}
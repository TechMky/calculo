export function isSafeNumber(number) {
    
    if (number < Number.MAX_SAFE_INTEGER  && number > Number.MIN_SAFE_INTEGER) {
        return true
    }
    return false
}

export function canAppendOperator(expression, operator) {

    if(String(expression).endsWith(operator))
        return false
    return true
}

export function isMathExpression(expression) {
    
    const REGULAR_EXPRESSION = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/
    return REGULAR_EXPRESSION.test(expression)
}

export function canAppendDecimal(expression) {
    
}
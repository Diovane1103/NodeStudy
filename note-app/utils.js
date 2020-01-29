class Utils {
    add(a, b) {
        return a + ' + ' + b + ' = ' + (a + b)    
    }

    sub(a, b) {
        return a + ' - ' + b + ' = ' + (a - b)    
    }

    mul(a, b) {
        return a + ' * ' + b + ' = ' + (a * b)    
    }

    div(a, b) {
        return a + ' / ' + b + ' = ' + (a / b)    
    }
}

module.exports = new Utils()
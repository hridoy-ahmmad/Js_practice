
function add(num1, num2) {
    const sum = num1 + num2
    return sum
}
function substract(num1, num2) {
    const substract = num1 - num2
    return substract
}
function mult(num1, num2) {
    const mult = num1 * num2
    return mult
}
function devide(num1, num2) {
    const devide = num1 / num2
    return devide
}

function calculation(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b)
        return result
    } 
    else if(operation === 'substract'){
        const result = substract(a,b)
        return result
    }
    else if(operation === 'mult'){
        const result = mult(a,b)
        return result
    }
    else if(operation === 'devide'){
        const result = devide(a,b)
        return result
    } else{
        'millo na vai'
    }
}
const result = calculation(4,5, 'devide')
console.log(result);

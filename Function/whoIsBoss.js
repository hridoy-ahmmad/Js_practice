

let kim = 200
let jim = 100
let tim = 500

function boss(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "kim"
    }
    else if (num2 > num1 && num2 > num3) {
        return "jim"

    } else {
        return "tim"
    }
    return num1, num2, num3
}
const result = boss(kim, jim, tim)
console.log(result, "~is the ultimate boss");



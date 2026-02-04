function evenAverage(numbers) {
    let sum = 0
    let count = 0
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum += number
            count++
        }
    }
    return sum / count


}
const result = evenAverage([54, 55, 58, 57, 49, 48, 47, 56, 52, 51, 53, 35])
console.log("Sum Of the even numbers :", result);








// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    return sum / numbers.length
}
console.log(make_avg([2, 5, 6, 4, 8, 8, 100]));



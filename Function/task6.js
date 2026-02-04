function oddAverege(numbers) {
    const odds = []
    for (let num of numbers) {
        if (num % 2 !== 0) {
            odds.push(num)
        }
    }
    let sum = 0;
    for (const odd of odds) {
        sum += odd
    }
    return sum / odds.length
}
const result = oddAverege([54, 55, 58, 57, 49, 48, 47, 56, 52, 51, 53, 35,])
console.log("The averege of the odd numbers is:", result);


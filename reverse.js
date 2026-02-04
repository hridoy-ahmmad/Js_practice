let numbers = [1, 2, 3, 4, 5, 6]
let reversed = []

// for (let num of numbers) {
//     reversed.unshift(num)
// }
// console.log(reversed);


for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    reversed.unshift(num)
}
console.log(reversed);

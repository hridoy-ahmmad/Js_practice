function sumOfArray(numbers) {
    let sum = 0
    for(let num of numbers){
       sum = sum + num  
    }
    return sum
}

let sum = sumOfArray([1, 2, 3, 4])
console.log(sum);

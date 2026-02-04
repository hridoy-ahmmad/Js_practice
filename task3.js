






// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

var concatenateNum = ' '

for (let num of numbers) {
    concatenateNum = concatenateNum + num

}
console.log(concatenateNum);

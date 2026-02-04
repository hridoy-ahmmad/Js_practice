







// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const revColors = []
for (let c of colors) {
    revColors.unshift(c)
}
// console.log(revColors);



// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming



// function longestWord(str) {
//     const words = str.split(' ');
//     let longest = '';
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word
//         }
//     }
//     return longest

// }
// console.log(longestWord('I am learning Programming to become a programmer'));

function longestWord(str) {
    const words = str.split(' ');
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    return longest

}
console.log(longestWord('I am learning Programming to become a programmer'));
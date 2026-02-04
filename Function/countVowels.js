





// Write a function to count the number of vowels in a string.

function countVowels(sentence) {
    let count = 0;
    let vowels = 'aeiouAEIOU'
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count

}
console.log(countVowels('A brown fox jumped over the lazy dogs aa'));







// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.




function count_zero(number) {
    // let eachNum = number.split('')
    let count = 0;
    for (let num of number) {
        if (num === '0') {
            count = count + 1
        }
    }
    return count


}
console.log(count_zero('10010010010100011100000'));

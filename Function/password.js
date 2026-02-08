







// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces

function checkPassword(password) {

    let hasNumber
    let hasUpperCase
    let hasSpaces = password.includes(" ")
    let resoans = []
    for (const char of password) {
        if (char >= '0' && char <= '9') {
            hasNumber = true
        }
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true
        }
    }
    if (!hasNumber) {
        resoans.push('Missing Number')
    } if (!hasUpperCase) {
        resoans.push('Missing Upper Case')
    }
    if (hasSpaces) {
        resoans.push('Must not contain spaces')
    }
    if (password.length < 8) {
        resoans.push('Must have 8 char')
    }
    let isValid = resoans.length === 0
    return {
        valid: isValid,
        resoans
    };
}
const result = checkPassword('hellohgjhjH')
console.log(result);

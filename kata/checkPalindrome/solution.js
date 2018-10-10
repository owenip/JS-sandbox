function checkPalindrome(inputString) {
    const cleanInputString = inputString.toLowerCase();
    return isPalindromRecursion(cleanInputString, 0, cleanInputString.length - 1)
}

function isPalindromRecursion(inputString, startPosition, backwardPosition) {
    if (startPosition == backwardPosition) {
        return true;
    } else if (inputString.charAt(startPosition) != inputString.charAt(backwardPosition)){
        return false;
    } else if (startPosition < backwardPosition - 1) {
        return isPalindromRecursion(inputString, startPosition + 1, backwardPosition - 1);
    }
    return true;
}

//Optimized Solution
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}
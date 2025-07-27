/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let xCopy = x;
    let reverse = 0;
    let reminder;

    while (xCopy > 0) {
        reminder = xCopy % 10;
        reverse = (reverse * 10) + reminder;
        xCopy = Math.floor(xCopy / 10);
    }

    return reverse == x;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
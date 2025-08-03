// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21


// Constraints:
// -231 <= x <= 231 - 1

function reverse(x) {
    let xCopy = x;
    x = Math.abs(x);
    let rev = 0;

    while (x > 0) {
        let last = x % 10;
        rev = rev * 10 + last;
        x = Math.floor(x / 10);
    }

    // let limit = Math.pow(2, 31);
    let limit = 2 ** 31;

    if (rev > limit - 1 || rev < -limit) {
        return 0;
    }
    // Check if the reversed number is within the signed 32-bit integer range
    return (xCopy < 0) ? -rev : rev;
}
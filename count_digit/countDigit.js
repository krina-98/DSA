let count = 0;

function countDigit(n) {
    if (n === 0) return 1;

    // change negative number to positive
    n = Math.abs(n);

    while (n) {
         n= Math.floor(n/ 10);
        count++;
    }

    return count;
}

console.log(countDigit(-12345));
function secondLargetInArray(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    // for handling array with less than 2 element
    if (arr.length < 2) {
        console.log("Array should have two elements");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest && firstLargest !== arr[i]) { // handle duplicate in array
            secondLargest = arr[i];
        }

    }
    return secondLargest
}

const demoarr = [4, 9, 9, 2, 8, 7, 1];
console.log(secondLargetInArray(demoarr))
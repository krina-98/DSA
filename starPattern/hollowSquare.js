for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - 1; j++) {
        if (i === 0 || i === n - 1) {
            row = row + "*";
        } else {
            if (j === 0 || j === n - 2) {
                row = row + "*";
            } else {
                row = row + " ";
            }
        }
    }
    console.log(row);
}
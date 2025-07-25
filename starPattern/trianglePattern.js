const n=5
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n - (i + 1); j++){
        row = row + " ";
    }
    for (let k = 0; k < (i + 1); k++){
        row = row + "*";
    }
    for (let m = 0; m < i; m++){
        row = row + "*";
    }
    for (let n = 0; n < n - (i + 1); n++){
        row = row + " ";
    }
    console.log(row);
}
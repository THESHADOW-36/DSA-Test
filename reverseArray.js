var array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
    res = [];
    for (i = arr.length-1; 0 <= i; i--){
        res.push(arr[i])
    }
    return res;
}

console.log(reverseArray(array))
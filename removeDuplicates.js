var array = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            res.push(arr[i])
        }
    }
    return res;
}

console.log(removeDuplicates(array))
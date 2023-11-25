var array = [2, 8, 5, 1, 9]

function findMaxValue(arr) {
    var res = "";
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                res = arr[j]
            }
        }
    }
    return res;
}

console.log(findMaxValue(array))
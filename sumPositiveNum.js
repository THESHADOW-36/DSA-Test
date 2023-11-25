var array = [1,-2,3,4,-5]

function sumPositiveNum(array){
    var res=0;
    for(var i = 0; i<array.length;i++){
        if(array[i]>0){
           res += array[i] 
        }
    }
    return res;
}

console.log(sumPositiveNum(array))
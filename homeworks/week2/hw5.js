function join(arr, concatStr) {
    var joinStr = []
    for(var i =0 ; i < arr.length-1 ;i++){
        joinStr = joinStr + arr[i] + concatStr

  }
    return joinStr+arr[arr.length-1]
} 

function repeat(str, times) {
    var repeatStr = ""
    for (var i =1 ;i<= times ; i++){
        for(var x=0; x<= str.length-1 ; x++){
            repeatStr = repeatStr + str[x]
        }
    }
    return repeatStr 
}

console.log(join(["aaa", "bb", "c", "dddd"], ',,'))
console.log(repeat('a', 5));

function capitalize(str) {
    var firstWord = str[0]
    var newStr =""
    if ("a"<=firstWord && firstWord<="z"){
        newStr = str.replace(firstWord , firstWord.toUpperCase())
        console.log(newStr);
    }
    else console.log(str)
} 

capitalize('Jello')

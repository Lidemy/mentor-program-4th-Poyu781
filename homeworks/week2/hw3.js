function reverse(str) {
    var newStr = ''
    for (var i=str.length - 1 ; i>=0 ; i=i-1 ){
        newStr = newStr + str[i]                
    }   
    console.log(newStr) 
}

reverse('hejekflo');

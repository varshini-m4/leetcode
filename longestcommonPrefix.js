var longestPrefix = function(strs){
    var length = strs[0].length;
    if(strs.length == 1){
        return strs[0];
    }
    for(let i=0;i<length;i++){
        for(let j=0;j<strs.length-1;j++){
            if(strs[j][i] != strs[j+1][i]){
                return strs[0].slice(0,i);
            }
        }
    }
    return strs[0]
}

var string = ["flower","flower","flower","flower"]
console.log(longestPrefix(string));
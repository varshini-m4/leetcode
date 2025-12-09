var strStr = function(haystack, needle){
    for(var i=0;i<haystack.length;i++){
       if(haystack[i] == needle[0]){
        var string = haystack.slice(i,i+needle.length);
        if(string == needle){
            return i
        }
       }
    }
    return -1
}
var haystack = "hello", needle = "ll";
console.log(strStr(haystack,needle));
var firstUniqChar = function(s) {
    var length = s.length;
    var map = new Map();
    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let i=0;i<length;i++){
        if(map.get(s[i])==1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
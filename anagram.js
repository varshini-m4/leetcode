var isAnagram = function(s, t) {
    var mapS = new Map();
    var mapT = new Map();
    
    for(let char of s){
        mapS.set(char, (mapS.get(char) || 0 ) + 1);
    }
    for(let char of t){
        mapT.set(char, (mapT.get(char) || 0 ) + 1);
    }
    if(mapS.size === mapT.size){
        for(let [key,value] of mapS){
            if(mapT.get(key)!==value){
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};

var s = "anagram", t = "nagaram";
isAnagram(s,t);
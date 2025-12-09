var array =[2,1,5,1,3,2];
var k = 3;
function slidingWindow(array,k){
    var n = array.length;
    var maxSum = 0;
    for(let index=0;index<k;index++){
        maxSum+=array[index];
    }
    var windowSum= maxSum;
    for(let index=k;index<n;index++){
        windowSum+= array[index] - array[index-k];
        maxSum = Math.max(maxSum,windowSum);
    }
    console.log(maxSum);
}
// slidingWindow(array,k);

// s="ADOBECODEBANC", t="ABC" → "BANC"
function slidingString(string, subString) {
    var stringLength = string.length;
    var objKeys = {};

    for (let char of subString) {
        objKeys[char] = (objKeys[char] || 0) + 1;
    }
    var shrink = 0;
    var minLen = Infinity;
    var result = "";
    var minlenString = {}; 
    for (let index = 0; index < stringLength; index++) {
        let ch = string[index];
        minlenString[ch] = (minlenString[ch] || 0) + 1;
        while (subString.length <= index && compareKeys(objKeys, minlenString)) {
            if ((index - shrink + 1) < minLen) {
                minLen = index - shrink + 1;
                result = string.slice(shrink, index + 1);
            }
            // shrink
            let leftChar = string[shrink];
            minlenString[leftChar]--;
            shrink++;
        }
    }
    return result;
}

function compareKeys(key1, key2) {
    return Object.keys(key1).every(key => (key2[key] || 0) >= key1[key]);
}

// ---- test ----
console.log(slidingString("ADOBECODEBANC", "ABC"));   // "BANC"
// console.log(slidingString("ADOBECODEBANC", "AABC"));  // "ADOBECODEBA"

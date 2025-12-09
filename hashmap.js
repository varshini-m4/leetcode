var hash = new Map();

// hash.set('Varshini',25)
// hash.set('Varshin',26)
// hash.set('Varshi',27)

// console.log(hash.get('Varshi'))
// console.log(hash);
// console.log(hash.has('Varshi'));
// hash.delete('Varshi');
// console.log(hash);

var ramsonNote = "aaa";
var magazine = "aab"

function RamsonNotes(ramsonNote,magazine){
    var map = {};
    var map2 = {};
    for(let char of magazine){
        map[char] = (map[char] || 0) + 1; 
    }
    for(let char of ramsonNote){
       if(!map[char]){
        return false;
       }
       console.log(map);
       map[char]--
       console.log(map);
    }
    return true
}

function compareKeys(key1, key2) {
    console.log(key1,key2)
    return Object.keys(key1).every(key => key2[key]);
}

console.log(RamsonNotes(ramsonNote,magazine));
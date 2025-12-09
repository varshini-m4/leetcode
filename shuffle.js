var array = [1,2,3,4,5,6,7,8,9,10];

function shuffle(array){
    for(var i=0;i<array.length;i++){
        var randomIndex = Math.floor(Math.random() * array.length);
        [array[i],array[randomIndex]] = [array[randomIndex],array[i]];
    }
    return array;
}

var output = shuffle(array);
console.log(output);
var array = [1,2,3,4,5];
var array1 = [1,2,3,4,5];
const k = 2 // Rotation rounds
// Result = [6,7,8,1,2,3,4,5];

//With Extra space - Right Rotation

function rotation(array, k){
    var n = array.length;
    var k = k%n;
    let result = new Array(n);
    for(let index=0;index<n;index++){
        result[(index+k)%n] = array[index];
    }
    console.log(result);
    return result;
}
// Result [3, 4, 5, 1, 2];
rotation(array,k);

//With Extra space - Left Rotation
var array = [1,2,3,4,5];
function leftRotation(array, k){
    var n = array.length;
    var k = k%n;
    let result = new Array(n);
    for(let index=n-1;index>=0;index--){
        result[((index-k)+n)%n] = array[index];
    }
    console.log('leftRotation',result);
    return result;
}
leftRotation(array1,k);

// Result = [ 4, 5, 1, 2, 3 ]
// Left rotation is also equal to right rotation k+1 times 
// Left rotation k times = Right Rotation k+1 times


//Without Extra Space
// Reverse Whole
// Reverse First k
// Reverese Rest 
// [1,2,3,4,5];
// [5,4,3,2,1];
// [3,4,5,2,1];
// [3,4,5,1,2]
function rotationWithoutSpace(array,k){
    function reverse(array, i, j){
        for(let index=i,jet=j;index<=jet;index++,jet--){
            [array[index],array[jet]] = [array[jet],array[index]];
        }
    }
    reverse(array,0,array.length-1);
    reverse(array,0,array.length-k);
    reverse(array,array.length-k,array.length-1);
    console.log(array);
}
// rotationWithoutSpace(array1,k);

// Result [ 3, 4, 1, 2, 5 ]


//String Rotation
var string = "abcde";
function stringRotation(string, k){
    var newString = [];
    var n = string.length;
    console.log(n,"ertyui");
    for(let index=n-1;index>=0;index--){
        console.log("n1",newString);
        newString[((index-k)+n)%n] = string[index];
    }
    return newString.join("");
}
// var result = stringRotation(string,k);
// console.log(result);

// var result = string.slice(k,string.length) + string.slice(0,k);
// console.log(result);

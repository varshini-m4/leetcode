var splitString = function(string){
    var mid = string.length/2;
    var firstHalfCount=0;
    var secondHalfCount=0;
    for(var i=0;i<string.length;i++){
        if(/[aeiouAEIOU]/.test(string[i])){
             if(i > mid){
                firstHalfCount+=1;
             } else{
            secondHalfCount+=1;
            }
        }
    }
    console.log(firstHalfCount,secondHalfCount);
    return firstHalfCount == secondHalfCount

}
var string = 'codingninjas'
console.log(splitString(string));
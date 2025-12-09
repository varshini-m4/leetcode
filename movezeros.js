var binaryString = "1001101";
function noOfSteps(character){
    const len = character.length;
    var steps =0;
    var number = character.split('');
    for(var index=len-1;index>=0;index--){
        if(number[index]==0){
            for(var j=index-1;j>=0;j--){
                if(number[j]==1){
                    console.log(steps);
                    [number[index],number[j]] = [number[j],number[index]];
                    steps++;
                    console.log(number,steps);
                    break;
                }
            }
        }
    }
    //console.log(number);
    return steps;
}

const count = noOfSteps(binaryString);
console.log("No of Steps Count : ",count);
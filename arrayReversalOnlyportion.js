var array = [1,2,3,4,5,6,7,8];
var i = 2
var k = 4
for(let index=i, j=k ; index<j;index++,j--){
    [array[index],array[j]] = [array[j],array[index]];
}
console.log(array);
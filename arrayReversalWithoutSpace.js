var array = [1,2,3,4,5,6,7,8];
var i = 0;
var j = array.length-1;
// Two pointers and Deconstructing
while(i < j){
    [array[i],array[j]] = [array[j],array[i]];
    i++, j--;
}

// For loop and Deconstructing
for(let index=0,j=array.length-1;index<j;index++,j--){
    console.log(array);
    [array[index],array[j]] = [array[j],array[index]];
}
console.log(array);


var rotate = function(nums, k) {
    var n = nums.length;
    for(var i=0,j=n-1;i<n/2;i++,j--){
        [nums[i],nums[j]] = [nums[j],nums[i]];
    }
    console.log(nums);
    for(var i=0,j=k-1;i<k/2;i++,j--){
        console.log(nums[i],nums[j]);
        [nums[i],nums[j]]=[nums[j],nums[i]];
    }
    console.log(nums);
    for(var i=k,j=n-1;i<n/2;i++,j--){
        [nums[i],nums[j]] = [nums[j],nums[i]];
    }
    console.log(nums);
};

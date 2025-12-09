var intersectionA = function(nums1, nums2) {
    var output = [];
    for(var index=0;index<nums1.length;index++){
        for(var j=0;j<nums2.length;j++){
            if(nums1[index] == nums2[j]){
                output.push(nums2[j]);
                nums2.splice(j,1);
                break;
            }
        }
    }
    console.log(nums1,nums2);
    return output
};

var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4];
// console.log(intersect(nums1,nums2));

var intersection = function(nums1,nums2){
    var newArray = [];
    for(var i=0;i<nums1.length;i++){
        for(var j=0;j<nums2.length;j++){
            if(nums1[i] == nums2[j]){
                newArray.push(nums1[i]);
                break;
            }
        }
    }
    console.log(newArray);
}
// intersection(nums1,nums2);

var intersect = function(nums1,nums2){
    return nums1.filter(item => nums2.includes(item));
}
console.log(intersect(nums1,nums2));

var intersectB = function(nums1,nums2){
    var map = new Map();
    var result = [];
    for(const char of nums1){
        map.set(char, (map.get(char)||0) + 1);
    }
    for(const char of nums2){
        if(map.get(char) > 0){
            result.push(char);
            map.set(char, map.set(char)-1);
        }
    }
    return result;
}

console.log(intersectB(nums1,nums2));
var array = [2,4,9,7,1,3,5];
// console.log(array.sort()); // Hybrid merge and insertion sort

var string = "abcde"
// console.log(string.slice(2, -1));
//console.log(string.at(0));

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// O(m+n)

var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
var len = nums1.length;
var a=len-n-1, b=n-1, c=n-1;

while(c>0){
    console.log(a,b,c)
    if(nums2[c] > nums1[b]){
        nums1[a] = nums1[a];
        c--;
        a--;
    }
}
console.log(nums1);

// stock price issue buy and sell

prices2 = [7,1,5,3,6,4];
prices = [1,2,3,4,5];

function maxProfit(prices){
    var profit = 0;
    for (var i = 1; i < prices.length; i++){
        if (prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1];
        }
    }
    console.log(profit);
}
maxProfit(prices)

// Two sum 
var twoSum = function(nums, target) {
    var length = nums.length;
    var output = [];
    for(var i=0;i<length;i++){
        for(var j = i+1;j<length;j++){
            if(target == nums[i]+nums[j]){
                output = [i,j];
                return output;
            }
        }
    }
    return
};

var nums1 = [1,2,2,1], nums2 = [2,2];

var moveZeroes = function(nums) {
    let i =0,j=1;
    let length = nums.length-1;
    while(j<length && i<length){
         console.log(i,j);
        if(nums[i]!=0){
            i++;
        }
        if(nums[j]==0){
            j++;
        }
        console.log(i,j);
        if(nums[i]==0 && nums[j]!=0){
            console.log(nums[i],nums[j]);
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++;
            console.log(i,j,length);
        }
        console.log('runn');
    }
    console.log(nums);
};

var nums=[0,1,0,3,12];
var num1 = [0,1];
moveZeroes(num1);


var array = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var plusOne = function(digits) {
    var number = BigInt(digits.join(""));
    console.log(number);
    number = number
    digits = String(number).split("").map(Number);
    console.log(digits);
    return digits;
};

var plusOne = function(digits) {
    return (BigInt(digits.join(""))+1n).toString().split("").map(Number);
};

plusOne(array);
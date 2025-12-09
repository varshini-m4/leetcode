var nums1 = [9,5,3,4,8,1,2];
var k = 3;

ithLargest = function(num1,k){
   var heap = [];
   for(const num of num1){
    heap.push(num);
    heap.sort((a,b)=> a-b);
    if(heap.length > k){
        heap.shift();
    }
   }
    console.log(heap);
    return heap[0];
}

console.log(ithLargest(nums1,k));
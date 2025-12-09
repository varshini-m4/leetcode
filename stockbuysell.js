
// buy once and sell once
var array = [7,2,5,1,3,4,6];

function stockMaxProfit(prices){
    var length = prices.length;
    var maxProfit = 0;
    var minprice = prices[0];
    for(var index=1;index<length;index++){
        if(prices[index] < minprice){
            minprice = prices[index];
        } else {
            maxProfit = Math.max(maxProfit, prices[index] - minprice);
        }
    }
    console.log(maxProfit);
}

stockMaxProfit(array);
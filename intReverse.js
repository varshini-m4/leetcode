var reverse = function(x) {
    var negative = false
    if(x < 0){
        negative = true;
        x = Math.abs(x);
    }
    var reversed = Number(x.toString().split("").reverse().join(""));
    if(reversed > 2147483647){
        return 0;
    }
    return negative ? -reversed : reversed;
};

console.log(reverse('746384712'));
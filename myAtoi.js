/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var sign = "";
    var number = "";
    s = s.trimStart();
    for(let i=0;i<s.length;i++){
         if(/[0-9]/.test(s[i])){
            number+=s[i];
        } else if(number == "" && sign == "" && (s[i] == '-' || s[i]=='+')){
            if(s[i] == '-'){
                sign = 'negative';
            } else if (s[i]=='+'){
                sign = 'positive';
            }
        } else {
            break;
        }
    }
    console.log(sign);
    if(sign == 'negative' && Number(number) > Math.pow(2,31)-1){
        number = Math.pow(2,31);
    } else if (Number(number) > Math.pow(2,31)-1){
        number = Math.pow(2,31)-1;
    }
    return sign== 'negative'? -Number(number) : Number(number);
};
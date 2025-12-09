// var string = "A man, a plan, a canal: Panama";
var string = "A man, a plan, a canal: Panama";
console.log(string.replace(/[^a-zA-Z]/g, '').toLowerCase());

function palindrome (string){
    var text = string.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    var text2 =text.split('').reverse().join('');
    if(text === text2){
        console.log("Palindrome")
    }
    for(var index=0,j=text.length-1;index<text.length/2;index++,j--){
        if(text[index]!==text[j]){
            console.log("Not")
            return;
        }
    }
    console.log("Palin")
}

palindrome(string)

// reversewords in a sentence 

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};
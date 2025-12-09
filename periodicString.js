process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}

function periodicString(string) {
    return string.slice(0, string.length / 2) == string.slice(string.length / 2, string.length);
}

function main() {
    let number = parseInt(readLine());
    for (i = 0; i < number; i++){
        var string = readLine();
        let x = periodicString(string);
        x = x ? 'True' : 'False';
        console.log(x);
    }
}

// string = "ubzumubzumubzumubzum";
// periodicString(string);
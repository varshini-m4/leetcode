var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

rotateImage = function (board) {
    var length = board.length;
    var newArray = [];
    var newMatrix = [];
    for (var column = 0;column < length; column++) {
        for (var row = length - 1; row >= 0; row--) {
                
            newArray.push(board[row][column]);
        }
        newMatrix.push(newArray);
        newArray = [];
    }
    console.log(newMatrix);
}

rotateImage(matrix);
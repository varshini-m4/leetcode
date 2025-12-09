var sudoku = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
validSudoku = function (table) {
    var rowarray = [];
    var x = [];
    var submatArray = [];
    var colarray = [];
    var rowset = new Set();
    var colset = new Set();
    var submatSet = new Set();
    //console.log(set)
    var length = table.length;
    for (var row = 0; row < length; row++) {
        for (var column = 0; column < length; column++) {
            if (Number(table[row][column])) {
                rowarray.push(table[row][column]);
            }
            if (Number(table[column][row])) {
                colarray.push(table[column][row]);
            }
            if(row % 3 == 0 && column%3 == 0){
                for(var k=row;k<row+3;k++){
                    for(var t=column;t<column+3;t++){
                        if (Number(table[k][t])) {
                            submatArray.push(table[k][t]);
                        }
                    }
                }
                if(submatArray.length != new Set(submatArray).size){
                    console.log('Not valid Sudoku');
                    return false
                }
                submatArray = [];
            }
        }
        rowset = new Set(rowarray);
        colset = new Set(colarray);
        if (rowarray.length !== rowset.size || colarray.length !== colset.size) {
            console.log('Not valid Sudoku');
            return false;
        }
        rowarray = [];
        colarray = [];
    }
    console.log("Valid Sudoku");
}

validSudoku(sudoku);
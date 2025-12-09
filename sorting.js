var array = [2,4,9,7,1,3,5];
//console.log(array.sort()); // Hybrid merge and insertion sort

// Bubble 
// Loop the array with index with comparison
var n = array.length;

function Bubble() {
    for (var index = 0; index < n -1; index++) {
        let swapped = false;
        for (var j = 0; j < n - index -1; j++) {
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];
                swapped = true;
            }
        }
        if(!swapped){
            console.log("Already sorted");
            break;
        }
    }
    console.log(array);
}
// Bubble(['1','2','3','4','5']);

// Selection Sort
// Swap once per loop 
function selection(){
    console.log(array);
    for(let index =0;index<n-1;index++){
        let minlen = index;
        for(let j=index+1;j<n;j++){
            if(array[j] < array[minlen]){
                minlen = j;
            }
        }
        if(minlen !== index){
            [array[index],array[minlen]] = [array[minlen],array[index]];
        }
    }
    console.log(array);
}

//selection();
// Insertion
// Insert at the right place

function insertion(){
    for(let index=1;index<n;index++){
        let key = array[index];
        
    }
    console.log(array);
}
insertion();

// Merge

// Quick
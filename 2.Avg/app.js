// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// case 1
/* 
function avg(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];            
    }
    return sum/arr.length;
}
 */

// case 2

function avg(arr) {
    let sum = 0;
    for(let num of arr){
        sum += num;            
    }
    return sum/arr.length;
}


// case 3
/* 
function avg(arr) {
    let sum = 0;
    for(let i in arr){
        sum += arr[i];            
    }
    return sum/arr.length;
}
 */
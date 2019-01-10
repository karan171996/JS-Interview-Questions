//Given an array A[] and a number x, check for pair in A[] with sum as x

var array = [1, 4, 45, 6, 10, -8];
var x =16;
var temp =x;

function check(array){
    for(let i=0;i<array.length;i++){
        var result = temp - array[i];
        if(array.indexOf(result) > -1){
            var a = array.indexOf(result);
            console.log('no are '+ array[i] + ' ' + array[a] );
            return 0;
        }
        else{
            temp=x;
        }
    }
    console.log('item not found');
}
check(array);


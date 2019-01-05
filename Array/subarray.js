//For subarray we have to maintain two variables having value zero in starting and after that compare the one value which only added when second value is greater  then first while other values keep iterating
var array = [-2,-3,4,-1,-2,1,5,-3];
var ending_here =0;
var ending_so_far =0;
for(let i=0;i<array.length;i++){

    ending_so_far += array[i];
    if(ending_here < ending_so_far) {
        ending_here = ending_so_far;
    }
    if(ending_so_far<0){
        ending_so_far = 0;
    }
}
console.log(ending_here);
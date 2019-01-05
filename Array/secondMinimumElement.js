var arr = [-5, -4, 0, 2, 10, 3, -5];
var smallest = Number.MAX_VALUE;
var secondsmallest = Number.MAX_VALUE;
for(let i=0;i<arr.length;i++){
    if(arr[i] < smallest){
       secondsmallest =smallest;
       smallest =arr[i];
   }
   else if(arr[i] < secondsmallest && arr[i] > smallest){
       secondsmallest = arr[i];
   }
}
console.log(secondsmallest);
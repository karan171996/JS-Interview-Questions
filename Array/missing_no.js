var arr =[11,15,6,8,9,10];
var x =16;
var temp=x;
let val =[];
for(let i=0;i<arr.length;i++){
    let s =temp-arr[i];
    if(s>=0 && val.includes(s)) {
        console.log('item present ' + s + " No is " +arr[i]);
        break;
    }
    temp=x;
    val.push(arr[i]);
};


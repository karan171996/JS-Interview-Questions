var array =[5,5,4,6,4];
var map ={};
for(let i=0;i<array.length;i++){
    if(map.hasOwnProperty(array[i])){
        map[array[i]] +=1;
    }
    else{
        map[array[i]] =1;
    }
}
console.log(JSON.stringify(map));

let newval =[];
Object.values(map).sort().reverse().forEach(item => {
    var key = Object.keys(map).find(key => map[key] === item);
    for (let i = 0; i < item; i++) {
        newval.push(parseInt(key));
    }
    map[key] =0;
});
console.log(newval);
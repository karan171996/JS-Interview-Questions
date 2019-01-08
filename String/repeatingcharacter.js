var string ="Programming".split("");
var string2 ="Java".split("");//Similarly for this
var string3 ="Combination".split("");//Similarly for this
var map1 = {};
for(let i=0;i<string.length;i++){
    if(map1.hasOwnProperty(string[i])){
        map1[string[i]]+=1;
    }
    else{
        map1[string[i]] = 1;
    }
}
var map ={};
Object.values(map1).forEach(item =>{
    var key = Object.keys(map1).find(key => map1[key] === item);
    if(item>1){
        map[key]=item;
    }
    map1[key]=0;
});
console.log(map);
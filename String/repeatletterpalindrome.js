//Returning the first occurence of non repeating element in palindrome
var letter ="aibophthpobia";
var value = '';
for(let i=0,j=letter.length;i<j,j>i;++i,--j){
    if(letter[i] !== letter[j]){
        value = letter[i];
    }
}
console.log(value);
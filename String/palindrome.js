/* Palindrome */


var word = "racecar";

var rword ="";

var letters = word.split("");  // ['r', 'a', 'c', 'e', 'c', 'a', 'r']

for (let i=0;i<word.length;i++){
    rword += letters.pop();
}

if(rword === word){
    console.log(word + " is a palindrome");
}
else{
    console.log(word + " is not a palindrome");
}
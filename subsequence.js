let s1 ="ABBA";
let s2 ="ABCABA";
let newString=[];
s1 =s1.split('');
s2 =s2.split('');
console.log(LCS(s1,s2));
function max(a,b){
    return (a>b)? a:b;
}
function LCS(str1,str2){
    var result =[];
    for( var i=0;i<=str1.length;i++){
        result[i]=[];
        for( var j=0;j<=str2.length;j++){
            if(i == 0 || j == 0) {
                result[i][j] = 0;
            }
            else if(str1[i-1] == str2[j-1])
            {
                result[i][j] =result[i-1][j-1]+1;}
            else
            {result[i][j] =max(result[i-1][j],result[i][j-1]);}
        }
    }
    //Showing subsequence
    let lcs =[];
    let x=str1.length;
    let y =str2.length;
    while(x>0 && y>0){
        if(str1[x-1] == str2[y-1])
        {
            lcs.push(str1[x-1]);
            x--;
            y--;
        }
        else if(result[x-1][y] > result[x][y-1])
            x--;
        else
            y--;
    }
    console.log(lcs.reverse().join('').toString());
    return result[str1.length][str2.length];
}


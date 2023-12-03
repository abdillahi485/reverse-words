// Good Luck 💪🏾
function reverseWords(sentence){
let arr=sentence.split(' ')
let reverseSentece=''
 for(let i=arr.length-1;i>=0;i--){
    if(arr[i] == ""){continue}
    if(reverseSentece.length>0)reverseSentece+=" "; 
    reverseSentece+=arr[i]
 }

 return reverseSentece;
}

let result1=reverseWords("fikrcamp bootcamp") 
let result2=reverseWords("hello there!") 
console.log(result1)
console.log(result2)


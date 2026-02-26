
// let stringword: string = "A man,a plan,a canal:panama";

let stringword:string="race a car"

let stringlower = stringword.toLowerCase();

let keepAlphabetOnly = stringlower.replace(/[^a-zA-Z0-9]/g, "");

console.log(keepAlphabetOnly); 

let reverseletter:string=""

for(let i:number=keepAlphabetOnly.length-1;i>=0;i--)
{
   reverseletter=reverseletter+keepAlphabetOnly[i]
}
console.log("reverese letter become : "+reverseletter)

if(keepAlphabetOnly==reverseletter)
{
    console.log ("The above string is palindrome")
}else{
    console.log("The above string is not a palindrom")
}
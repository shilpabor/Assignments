// String Sentance="java programming is fun and challenging"

let sentence:String="java programming is fun and challenging"

const spplittedText=sentence.split(" ");
 console.log("The spplited word is: " +spplittedText);


console.log("The number of word is: "+spplittedText.length);




//sentence.charAt(0).toUpperCase
let newString:string[]=[];


for(let i:number=0;i<spplittedText.length;i++)
{
  let newString1 =spplittedText[i].charAt(0).toUpperCase();
  newString.push(newString1)
}



console.log(newString)

//console.log(spplittedText.reverse());
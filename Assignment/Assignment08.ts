let javastring:string="java is a popular programming language. java is used for web development,mobile application and more"

let javaspplitted=javastring.split(" ");

let occurance:number=0;
//let position:number=0

for(let i:number=0;i<javaspplitted.length;i++)
{
    if (javaspplitted[i]==="java")
    {
      
     console.log("java found at position of :"+i)
        occurance++;
    }
}
console.log("total occurance of java in above string is: "+occurance)





for (let i:number=0;i<5;i++)
{
  let line=""

    for(let j:number=5;j>i;j--)
    {
       
            line+=" "
    }

    for(let k:number=0;k<=i;k++)
    {
      line+="*"
    }
    console.log(line)
}
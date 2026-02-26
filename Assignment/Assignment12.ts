let n:number=5

for (let i:number=0;i<n;i++)
{
  let line=""

    for(let j:number=n;j>i;j--)
    {
       line+=" "
    }
 for(let k:number=0;k<=i;k++)
    {
      line+=" *"
    }
    console.log(line)
    }
    for(let i:number=1;i<=n-1;i++)
    {
      let line=" "
         for(let j:number=1;j<=i;j++)
         {
          line+=" "
         }
         for(let k:number=n-1;k>=i;k--)
         {
          line+=" *"
         }
         console.log(line)
    }
  


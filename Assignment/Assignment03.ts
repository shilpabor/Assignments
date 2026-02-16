let studentname:string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82]

/* let Suresh=marks[0]+=10
let Mahesh=marks[1]+=10
let Naresh=marks[2]+=10 */
let totalMark:number=0
for(let i:number=0;i<marks.length;i++)
{
    
  marks[i]+=10
  console.log("updated Marks:\n"+studentname[i]+": "+marks[i])
  totalMark+=marks[i]
  console.log("total marks of students"+totalMark)
  console.log("Average Marks:"+totalMark/3)
  }
  

//console.log("updated Marks:\n"+studentname[0]+": "+marks[i]+"\n"+studentname[1]+": "+marks[i]+"\n"+studentname[2]+": "+marks[i])

//console.log("Average Marks:"+(Suresh+Mahesh+Naresh)/3)
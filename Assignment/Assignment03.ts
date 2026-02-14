let studentname:string[]=["Suresh","Mahesh","Naresh"];
let marks:number[]=[75, 80, 82]

let Suresh=marks[0]+=10
let Mahesh=marks[1]+=10
let Naresh=marks[2]+=10

console.log("updated Marks:\n"+studentname[0]+": "+Suresh+"\n"+studentname[1]+": "+Mahesh+"\n"+studentname[2]+": "+Naresh)

console.log("Average Marks:"+(Suresh+Mahesh+Naresh)/3)
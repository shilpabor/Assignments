let empNames:string[]=["Alice johnson","Bob Smith","Carol davis","david Brown","Eva Green"] 
let basicSalary:number[]=[75000,68000,82000,90000,60000]
let exp:number[]=[5.1,3.2,7.1,10.2,2.4]
let ratingEmp:number[]=[4.2,3.8,4.5,2.5,3.5]

let empMap=new Map<string,number>()


hike();


  function hike():Map<string,number>{
   for(let i:number=0;i<empNames.length;i++)
   {
          hikePercetage(empNames[i],ratingEmp[i],basicSalary[i],exp[i]) 
       
   
empMap.set(empNames[i],basicSalary[i])
}return empMap}
    


function hikePercetage(empName:string,rating:number,basicSalary:number,year:number){

let hikepercent:number=0

    if(rating>4)
    {
        hikepercent=basicSalary*15/100+1500
        if(year>=5)
        {
        hikepercent+=5000
          
           console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }else{
            console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }
    }else if (rating>=3 && rating<4)
    {
        hikepercent=basicSalary*10/100+1200
         if(year>=5)
        {
             hikepercent+=5000
            console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }else{
            console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }
    }else
    {
        hikepercent=basicSalary*3/100+300
         if(year>=5)
        {
            hikepercent+=5000
            console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }else{
            console.log(empName+"is :"+(hikepercent/basicSalary)*100)
        }
    }
}

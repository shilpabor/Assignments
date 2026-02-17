primeNumber(23);

function primeNumber(input:number):void
{
    let count:number=0;
    if(input>1)
    {
        
        for(let divisors:number=1;divisors<9;divisors++)
        {
            if(input%divisors===0)
          {
            count++;}}}
            if (count<=2)
            {
                console.log("The "+input+" is a prime number")
            }else
            {
                console.log("The "+input+" is not a prime number")
            }

        }  
    



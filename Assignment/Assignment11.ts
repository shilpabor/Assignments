
function powerOfNumber(x:number,n:number):number{
let value:number=1
let power = Math.abs(n);
for(let i:number=1;i<=power;i++)
{
    value=value*x;  
}
if(n<0)
{
    value=1/value;
}

console.log(n+" power of "+x+" is :"+value)
return value
}

powerOfNumber(2,-2)

let arryOfTransactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-4000]


let transactioncount:number=arryOfTransactions.length

console.log("total number of traction: "+transactioncount)
let credit:number=0;
let debit:number=0;

//total ammount credited
let suspicious:number=0
 for(const transaction of arryOfTransactions )
{
   if(transaction>0)
   {
     console.log(transaction)
     credit=transaction+credit;
        if(transaction>10000)
        {
        suspicious++

        console.log("Suspicious credit Transaction with Amount :"+transaction)
        }
    }
    else
    {
        console.log(transaction);
        debit=debit+transaction
        if(transaction>-10000)
        {
            suspicious++
            console.log("Suspicious debit Transaction with Amount : "+transaction)
        }

  
   }}
   console.log("total amount credited :"+credit)
   console.log("total amount debited: "+debit)

   //Print total amount remaining at the end in Bank Account 

    //let pendingAmmount:number=0;

   let pendingAmmount:number=credit+debit

   console.log("Print total amount remaining at the end in Bank Account: "+pendingAmmount)


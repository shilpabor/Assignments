let arryOfTransactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-4000]
for(const transaction of arryOfTransactions)
{
    console.log(transaction);
}

let transactioncount:number=arryOfTransactions.length

console.log("total number of traction: "+transactioncount)
let credit:number=0;
let debit:number=0;

//total ammount credited

 for(const transaction of arryOfTransactions )
{
   if(transaction>0)
   {
    // console.log(transaction)
     credit=transaction+credit;
     
   }else
   {
    //console.log(transaction);
    debit=debit+transaction
   }}
   console.log("total amount credited :"+credit)
   console.log("total amount debited: "+debit)

   //Print total amount remaining at the end in Bank Account 

    //let pendingAmmount:number=0;

   let pendingAmmount:number=credit+debit

   console.log("Print total amount remaining at the end in Bank Account: "+pendingAmmount)

//If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions

let suspicious:number=0

for(let i:number=0;i<arryOfTransactions.length;i++)
{
    //console.log(arryOfTransactions[i])
    if(arryOfTransactions[i]>0)
    {
        if(arryOfTransactions[i]>10000)
        {
        suspicious++

        console.log("Suspicious credit Transaction with Amount"+arryOfTransactions[i])
        }
    }
    else
    {
        if(arryOfTransactions[i]>-10000)
        {
            suspicious++
            console.log("Suspicious debit Transaction with Amount"+arryOfTransactions[i])
        }

    }
   }
 console.log("print total number of suspicious transactions: "+suspicious)


    

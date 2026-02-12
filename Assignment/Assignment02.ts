function eligibleForLoanOrNot(customername:string,creditScore:number,income:number,isEmployed:Boolean,debtToIncomeRatio:number)
{
    if(creditScore>750)
    {
        console.log("the loan is automatically approved.")
    }
    else if(650<creditScore && 750>creditScore)
    {
        console.log("additional checks are performed.")
        if(income>=50000)
        {
            console.log("Loan to be considered")
            if(isEmployed)
            {
                console.log("loan will approve")
                if(debtToIncomeRatio<40)
                {
                    console.log("the loan is finnally approved for: "+customername)
                }else{
                    console.log("loan is reject because DTI ratio is greater than 40%")
                }
            }else{
                console.log("loan will denied because customer is not employee")
            }
        }else{
            console.log("loan will not consider because income is less than 50000")
        }
    }
    else if(creditScore<650)
        {
         console.log(" the loan is denied.")
        }
    
}


 eligibleForLoanOrNot("John Doe",720,55000,true,35.0)

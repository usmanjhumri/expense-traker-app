import React, { useContext } from 'react'
import {GlobalContext} from '../../context/GolobalState'
export default function Balance() {
  const {transaction} = useContext(GlobalContext);
  let balance = 0;
  let income = 0;
  let expense = 0;
  transaction.map((transac)=>{
  if(transac.transactionAmount>0){
    income += (+transac.transactionAmount)
    
  }
  else if(transac.transactionAmount<0){
    expense += (+transac.transactionAmount);
  }

  })
  balance = income + expense;
  return (
    <div>
       <h4 className='CurrentBalance'>Current Balance</h4>
        <h1 className='currentbalance'>${balance}</h1>
    </div>
  )
}

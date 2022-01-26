import React  from "react";
import "./IncomeEpense.css";
import {GlobalContext} from '../../context/GolobalState';
import { useContext } from "react";

const IncomeExpense = () => {
  const {transaction} = useContext(GlobalContext);
  
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
  return (
    <>
    <div className="flex">
      <div className="incomeEexpensebox">

        <h4 className="incomewala">Income</h4>
        <p className="incomewalaamount">${income}</p>

      </div>

      <div className="incomeEexpenseboxtwo">

        <h4 className="incomewalatwo">Expense</h4>
        <p className="incomewalaamounttwo">${expense}</p>
        
      </div>
    </div>
    </>
  );
};

export default IncomeExpense;

import React, { useContext } from "react";
import { GlobalContext } from "../../context/GolobalState";
import Transaction from "./transaction";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <div>
        <h3 className="TransactionHistory">Transaction History</h3>
        <hr />
        <ul className="thul">
          {transaction.map((trans, indx) => {
            return <Transaction Transaction={trans} key={indx}></Transaction>;
          })}
        </ul>
      </div>
    </>
  );
};

export default TransactionHistory;

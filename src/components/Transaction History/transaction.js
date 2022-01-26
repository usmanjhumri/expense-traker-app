import React, { useContext } from "react";
import { GlobalContext } from "../../context/GolobalState";
const Transaction = ({ Transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const classn = Transaction.transactionAmount > 0 ? "plus" : "minus";
  return (
    <li className={classn + "   thli"}>
      {Transaction.discription}
      <span> $ {Transaction.transactionAmount}</span>
      <button
        className="minusbutton"
        onClick={() => {
          console.log(Transaction.id);
          deleteTransaction(Transaction.id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default Transaction;

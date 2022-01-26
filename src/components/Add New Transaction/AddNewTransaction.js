import React from "react";
import "./AddNewTransaction.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GolobalState";

const AddNewTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const hadleAddition = (e) => {
    e.preventDefault();

    let data = {
      id: new Date().getTime(),
      discription: text,
      transactionAmount: amount,
    };
    addTransaction(data);
    console.log(data);
  };

  return (
    <>
      <div>
        <h4 className="addnewtransaction">Add New Transaction</h4>
        <hr />
        <form action="" onSubmit={hadleAddition}>
          <label htmlFor="Description">Description</label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Detail of Transaction"
            required
          />
          <br />
          <label htmlFor="Transaction Amount">Transaction Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Dollar Value of Transaction"
            required
          />
          <br />
          <button className="addtransactionbutton">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddNewTransaction;

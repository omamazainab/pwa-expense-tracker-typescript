import React, { useContext, useState } from "react";
import { idGenerator } from "../utils/idGenerator";
import { globalContext } from "../context/Globalstate";
import "../assets/styles/AddTransactions.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(globalContext);

  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const addIncome = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (amount <= 0) alert("please enter amount greater than zero");
    else {
      const newTransaction = {
        id: idGenerator(),
        description: description,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
  };

  const addExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (amount <= 0) alert("please enter amount greater than zero");
    else {
      const newTransaction = {
        id: idGenerator(),
        description: description,
        amount: -amount,
      };
      addTransaction(newTransaction);
    }
  };

  return (
    <form name="myform" id="myform">
      <div className="input-container">
        <h6 className="add-trans-title">Add Transaction</h6>
        <div className="desc-container">
          <input
            id="description"
            type="text"
            placeholder="Description *"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="amount-container">
          <input
            id="amount"
            type="number"
            placeholder="Amount *"
            min="0"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAmount(Math.abs(parseFloat(e.target.value)));
            }}
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn income-btn " onClick={addIncome}>
          Add Income
        </button>
        <button className="btn expense-btn " onClick={addExpense}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default AddTransaction;

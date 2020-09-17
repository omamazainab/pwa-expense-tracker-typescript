import React from "react";
import  '../assets/styles/AddTransactions.css'

const AddTransaction = () => {
  return (
    <form name="myform" id="myform">
      <div className="input-container">
        <h6 className="add-trans-title">Add Transaction</h6>
        <div className="desc-container">
          <input
            id="description"
            type="text"
            placeholder="Description *"
            // value={description}
            // onChange={(e) => {
            //   setDescription(e.target.value);
            // }}
          />
        </div>
        <div className="amount-container">
          <input
            id="amount"
            type="number"
            placeholder="Amount *"
            min="0"
            // value={amount}
            // onChange={(e) => {
            //   setAmount(Math.abs(e.target.value));
            // }}
          />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn income-btn " /*onClick={addIncome} */>
          Add Income
        </button>
        <button className="btn expense-btn" /*onClick={addExpense} */>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default AddTransaction;

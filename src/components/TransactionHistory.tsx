import React, { useContext } from "react";
import { globalContext } from "../context/Globalstate";
import { TransactionType } from "../services/Transaction";
import "../assets/styles/TransactionHistory.css";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(globalContext);

  return (
    <div>
      <div
        className="transaction-history-container"
        data-toggle="collapse"
        data-target="#collapseHistory"
        aria-expanded="false"
        aria-controls="collapseHistory"
      >
        <p className="Trans-history-title"> Transaction History</p>
      </div>

      <div className="collapse collapseHistory" id="collapseHistory">
        <ul className="historylist">
          {transactions.map((transaction: TransactionType) => (
            <li
              className={
                transaction.amount < 0
                  ? "historylist-item minus"
                  : "historylist-item plus"
              }
            >
              <div className="trans-des">
                <span className="transaction-title">
                  {transaction.description}
                </span>
                <span className="transaction-amount">
                  {transaction.amount < 0 ? "-" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
              <button
                className="del-btn"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("delete");
                  deleteTransaction(transaction.id);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;

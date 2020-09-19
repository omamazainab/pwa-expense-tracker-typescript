import React from "react";
import '../assets/styles/TransactionHistory.css'

const TransactionHistory = () => {
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
          
            <li className="historylist-item">
              <div className="trans-des"><span className="transaction-title">transaction 1 </span> <span className="transaction-amount"> $0.00</span></div>
              <button
                className="del-btn" >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;

import React from "react";
import "./App.css";
// components
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import Graph from "./components/Graph";
import AddTransaction from "./components/AddTransactions";
import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="expense-tracker">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionHistory />
          <Graph />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

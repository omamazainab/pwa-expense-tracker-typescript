import React,{useContext,useState,useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import {globalContext} from '../context/Globalstate'
import {TransactionType} from '../services/Transaction'
import "../assets/styles/Graph.css";

const Graph = () => {

  const {transactions} = useContext(globalContext);
  const [income,setIncome] =useState(0);
  const [expense,setExpense] = useState(0);

  useEffect(() => {
    let income=0,expense=0;
    transactions.map((transaction:TransactionType)=>
      transaction.amount < 0 ?  
      setExpense(expense+=Math.abs(transaction.amount)):
      setIncome(income+=transaction.amount)
  )

  }, [transactions])

  return (
    <div>
      <div
        className="transaction-history-container"
        data-toggle="collapse"
        data-target="#collapseGraph"
        aria-expanded="false"
        aria-controls="collapseGraph"
      >
        <p className="Trans-history-title"> Transaction Graph</p>
      </div>

      <div className="collapse collapseGraph" id="collapseGraph">
        <div className="pie-chart">
          <Doughnut
            data={{
              labels: ["Income", "Expense"],
              datasets: [
                {
                  data: [income, expense],
                  backgroundColor: ["green", "red"],
                  borderWidth: 0,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;

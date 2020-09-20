import React, { useContext } from 'react'
import {globalContext} from '../context/Globalstate'
import {TransactionType} from '../services/Transaction'
import '../assets/styles/IncomeExpense.css'


const IncomeExpense = () => {
     const { transactions } = useContext(globalContext);

  const amounts = transactions.map((transaction:TransactionType) => transaction.amount);

  const income = amounts
    .filter((item:number) => item > 0)
    .reduce((acc:number, item:number) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts
    .filter((item:number) => item < 0)
    .reduce((acc:number, item:number) => (acc += item), 0) *-1)
    .toFixed(2);


    return (
        <div className="text-center inc-exp-root">
      <div className="inc-expense-container">
        <div className="income-container">
            <h4 className="income_title">Income</h4>
            <p className="income">${income}</p>
        </div>
        <div className="expense-container">
            <h4 className="expense_title">
                Expense
            </h4>
            <p className="expense">-${expense}</p>
        </div>
      </div>
    </div>
    )
}

export default IncomeExpense

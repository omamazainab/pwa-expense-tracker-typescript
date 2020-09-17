import React from 'react'
import '../assets/styles/IncomeExpense.css'


const IncomeExpense = () => {
    return (
        <div className="text-center inc-exp-root">
      <div className="inc-expense-container">
        <div className="income-container">
            <h4 className="income_title">Income</h4>
            <p className="income">$0.00</p>
        </div>
        <div className="expense-container">
            <h4 className="expense_title">
                Expense
            </h4>
            <p className="expense">$0.00</p>
        </div>
      </div>
    </div>
    )
}

export default IncomeExpense

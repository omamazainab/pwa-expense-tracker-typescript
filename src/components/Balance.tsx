import React,{useContext, useEffect, useState} from 'react'
import {globalContext} from '../context/Globalstate'
import {TransactionType} from '../services/Transaction'
import '../assets/styles/Balance.css'

const Balance = () => {

    const {transactions} = useContext(globalContext);
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        let sum = 0;
        transactions.map((transaction:TransactionType)=>{
            sum += transaction.amount
            return setBalance(sum)
        })
    }, [transactions]);
    
    return (
        <div className="text-center">
      <h6 className="heading balance_title">Balance</h6>
  <h3 className="heading balance">
      {balance<0? '-' : ''} ${Math.abs(balance).toFixed(2)}
     
      </h3>
    </div>
    )
}

export default Balance

import React from 'react'
import '../assets/styles/Balance.css'

const Balance = () => {
    
    return (
        <div className="text-center">
      <h6 className="heading balance_title">Balance</h6>
  <h3 className="heading balance">
      {/* {balance<0? '-' : ''} ${Math.abs(balance)} */}
      $0.00
      </h3>
    </div>
    )
}

export default Balance

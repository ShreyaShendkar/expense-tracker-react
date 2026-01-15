import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
  const { resetTransactions } = useContext(GlobalContext);

  return (
    <div className="header">
      <h2>Expense Tracker</h2>
      <button className="btn reset-btn" onClick={resetTransactions}>
        Reset data
      </button>
    </div>
  )
}
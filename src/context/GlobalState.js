import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Load transactions from localStorage (if any)
function loadInitialTransactions() {
  try {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    return [];
  }
}

// Initial state
const initialState = {
  transactions: loadInitialTransactions(),
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Persist transactions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('transactions', JSON.stringify(state.transactions));
    } catch (err) {
      // ignore write errors
    }
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function resetTransactions() {
    try {
      localStorage.removeItem('transactions');
    } catch (err) {
      // ignore
    }
    dispatch({ type: 'RESET_TRANSACTIONS' });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction, resetTransactions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
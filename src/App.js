import React from 'react'
import './App.css'

import { 
  Header, 
  Balance, 
  IncomeExpense, 
  TransactionList, 
  AddTransaction
} from './components'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <AddTransaction />
        <TransactionList />
      </div>
    </>
  )
}

export default App


import React from 'react'
import "./App.css"
import BankingSection from './components/BankingSection/BankingSection'
import SavingSection from './components/SavingSection/SavingSection'
const App = () => {
  return (
    <div className='main-container'><BankingSection/><SavingSection/></div>
  )   
}

export default App
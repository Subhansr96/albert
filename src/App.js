import React from "react";
import "./App.css";
import BankingSection from "./components/BankingSection/BankingSection";
import InvestingSection from "./components/InvestingSection/InvestingSection";
import SavingSection from "./components/SavingSection/SavingSection";
import PeopleSection from "./components/PeopleSection/PeopleSection";
const App = () => {
  return (
    <div className="main-container">
      <BankingSection />
      <SavingSection />
      <InvestingSection/>
      <PeopleSection />
    </div>
  );
};

export default App;

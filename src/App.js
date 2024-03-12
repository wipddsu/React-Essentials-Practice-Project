import { useState } from "react";
import Header from "./components/header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

import { calculateInvestmentResults } from "./utils/investment";
import "./styles.css";

export default function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputResults = calculateInvestmentResults(inputs);
  let investment = inputs.initialInvestment + inputs.annualInvestment;

  for (const result of inputResults) {
    result["investedCapital"] = investment;
    investment += inputs.annualInvestment;
  }

  const handleInputs = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: Number(e.target.value),
    }));
  };

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChangeInputs={handleInputs} />
      <ResultTable inputResults={inputResults} />
    </>
  );
}

import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

import "./styles.css";

export default function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputs.duration >= 1;

  const handleInputs = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: Math.abs(Number(e.target.value)),
    }));
  };

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChangeInputs={handleInputs} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable inputs={inputs} />}
    </>
  );
}

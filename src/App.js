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

  // const [investResults, setInvestResults] = useState(inputResults);

  // console.log(
  //   inputResults.map((result) => {
  //     const interest = result.interest;
  //   }),
  // );

  const handleInputs = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.id]: Number(e.target.value),
    }));

    // setInvestResults((prev) => {});
  };

  return (
    <>
      <Header />
      <UserInput inputs={inputs} onChangeInputs={handleInputs} />
      <ResultTable inputResults={inputResults} />
    </>
  );
}

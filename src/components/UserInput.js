import { useState } from "react";

export default function UserInput({ inputs, onChangeInputs }) {
  return (
    <main>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initialInvestment">initial investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={inputs.initialInvestment}
            onChange={onChangeInputs}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">annual investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={inputs.annualInvestment}
            onChange={onChangeInputs}
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">expected return</label>
          <input
            type="number"
            id="expectedReturn"
            value={inputs.expectedReturn}
            onChange={onChangeInputs}
          />
        </div>
        <div>
          <label htmlFor="duration">duration</label>
          <input
            type="number"
            id="duration"
            value={inputs.duration}
            onChange={onChangeInputs}
          />
        </div>
      </div>
    </main>
  );
}

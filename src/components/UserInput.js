export default function UserInput({ inputs, onChangeInputs }) {
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">initial investment</label>
            <input
              type="number"
              id="initialInvestment"
              value={inputs.initialInvestment}
              onChange={onChangeInputs}
              required
            />
          </p>
          <p>
            <label htmlFor="annualInvestment">annual investment</label>
            <input
              type="number"
              id="annualInvestment"
              value={inputs.annualInvestment}
              onChange={onChangeInputs}
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">expected return</label>
            <input
              type="number"
              id="expectedReturn"
              value={inputs.expectedReturn}
              onChange={onChangeInputs}
              required
            />
          </p>
          <p>
            <label htmlFor="duration">duration</label>
            <input
              type="number"
              id="duration"
              value={inputs.duration}
              onChange={onChangeInputs}
              required
            />
          </p>
        </div>
      </div>
    </main>
  );
}

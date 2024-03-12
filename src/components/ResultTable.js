import { calculateInvestmentResults, formatter } from "../utils/investment";

export default function ResultTable({ inputs }) {
  const resultData = calculateInvestmentResults(inputs);
  let capital = inputs.initialInvestment + inputs.annualInvestment;

  for (const result of resultData) {
    result["investedCapital"] = capital;
    capital += inputs.annualInvestment;
  }

  return (
    <footer>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest&#40;Year&#41;</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className="center">
          {resultData.map((result, index) => (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>
                {formatter.format(
                  result.valueEndOfYear - result.investedCapital,
                )}
              </td>
              <td>{formatter.format(result.investedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </footer>
  );
}

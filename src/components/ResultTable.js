import { useState } from "react";
import { formatter } from "../utils/investment";

export default function ResultTable({ inputResults }) {
  return (
    <footer>
      <table id="result" className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest&#40;Year&#41;</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {inputResults.map((result, index) => (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </footer>
  );
}

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("INR");
  const [secondCurrency, setSecondCurrency] = useState("CAD");

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e)} />
      <select
        defaultValue={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        defaultValue={secondCurrency}
        onChange={(e) => setSecondCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

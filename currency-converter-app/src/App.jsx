// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("INR");
  const [secondCurrency, setSecondCurrency] = useState("CAD");
  const [output, setOutput] = useState("No conversion yet");
  const [isLoading, setIsLoading] = useState(false);

  function handleInput(e) {
    setInput(Number(e.target.value));
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCurrencyConversions() {
        try {
          if (firstCurrency === secondCurrency || !input) return; // Stops the fetch request if inputs arent selected
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${firstCurrency}&to=${secondCurrency}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Error fetching data");
          const conversions = await res.json();
          if (firstCurrency === secondCurrency || !input) return;

          console.log(conversions);
          setOutput(conversions.rates[`${secondCurrency}`]);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchCurrencyConversions();

      return function () {
        controller.abort();
      };
    },
    [input, firstCurrency, secondCurrency]
  );

  let displayMessage;
  if (firstCurrency === secondCurrency) {
    displayMessage = "Change currency";
  } else if (!input) {
    displayMessage = "Input a number";
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
      <p>
        {firstCurrency === secondCurrency || !input
          ? displayMessage
          : isLoading
          ? "Loading"
          : output}
      </p>
    </div>
  );
}

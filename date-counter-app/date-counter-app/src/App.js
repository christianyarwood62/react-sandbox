import { useState } from 'react';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  
  function addAppStep() {
    setStep((s) => s + 1);
  }

  function lessAppStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function addCount() {
    setCount((c) => c + step);
    setDate((date) => {
      const newDate = new Date(date.getTime() + step * 24 * 60 * 60 * 1000);
      return newDate;
    });
  }

  function decreaseCount() {
    setCount((c) => c - step);
    setDate((date) => {
      const newDate = new Date(date.getTime() - step * 24 * 60 * 60 * 1000);
      return newDate;
    });
  }

  return <div>
    <div>
      <button onClick = {lessAppStep}>-</button>
      Step: {step}
      <button onClick = {addAppStep}>+</button>
    </div>
      
    <div>
      <button onClick={decreaseCount}>-</button>
      Count: {count}
      <button onClick={addCount}>+</button>
    </div>
    <div>{count} days from today is {date.toDateString()}</div>
  </div>
}
export default App;
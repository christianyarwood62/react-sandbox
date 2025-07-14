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
  
  // function addAppStep() {
  //   setStep((s) => s + 1);
  // }

  // function lessAppStep() {
  //   if (step > 1) {
  //     setStep((s) => s - 1);
  //   }
  // }

  function addCount() {
    setCount((c) => {
      const newCount = c + step;
      updateDate(newCount);
      return newCount;
    });
  }

  function decreaseCount() {
    setCount((c) => {
      const newCount = c - step;
      updateDate(newCount);
      return newCount;
    });
  }

  function handleInput(e) {
    const newCount = Number(e.target.value);
    setCount(newCount);
    updateDate(newCount);
  }

  function handleStep(e) {
    setStep(Number(e.target.value))
  }

  function updateDate(newCount) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + newCount);
    setDate(newDate);
  }
  
  return <div>
    <div>
      <input type='range' min='0' max='10' value={step} onChange={handleStep}></input>
      Step: {step}
      {/* <button onClick = {lessAppStep}>-</button>
      Step: {step}
      <button onClick = {addAppStep}>+</button> */}
      {/* <input type='input' onClick={handleInput}></input> */}
    </div>
      
    <div>
      <button onClick={decreaseCount}>-</button>
      <input type='text' value={count} onChange={handleInput}></input>
      <button onClick={addCount}>+</button>
    </div>
    <div>{count} days from today is {date.toDateString()}</div>
  </div>
}
export default App;
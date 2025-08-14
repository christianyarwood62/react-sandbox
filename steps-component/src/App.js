import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep(s + 1); this works but you shouldnt update state based on current state, use a callback instead
    }
  }

  return (
    <div>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor='grey'
                textColor='black'
                onClick={() => alert('This uses a react component for a button')}
              >
                Learn more about components
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button 
              bgColor='purple' 
              textColor='white' 
              onClick={handlePrevious}>
                <span>👈</span> Previous 
            </Button>
            <Button 
              bgColor='purple' 
              textColor='white' 
              onClick={handleNext} >
                Next <span>👉</span>
            </Button>
          </div>
        </div>
        )
        }
  </div>
  )
}

function StepMessage({step, children}) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

function Button({textColor, bgColor, onClick, children}) {
  return (
    <button
      className="buttons"
      style={{backgroundColor: bgColor, color: textColor}}
      onClick = {onClick}
    >
      {children}
    </button>
  )
}
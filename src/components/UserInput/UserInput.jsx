import { useState } from "react";
import classes from './UserInput.module.css'

export default function UserInput(props){
  const initialUserInput = {
    'current-savings' : 10000,
    'yearly-contribution' : 1200,
    'expected-return' : 7,
    duration: 10
  }

  const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler = (event) => {
        event.preventDefault();
        
        props.onCalculate(userInput)
    }

    const resetHandler = () => {
        setUserInput(initialUserInput)
    };

    const inputHandler = (input, value) => {
      setUserInput((prevInput) => {
        return  {
          ...prevInput,
          [input] : value,
        }
      })
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event) => inputHandler('current-savings', event.target.value)} 
            type="number" 
            id="current-savings" 
            value={userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event) => inputHandler('yearly-contribution', event.target.value)}
            type="number" 
            id="yearly-contribution" 
            value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event) => inputHandler('expected-return', event.target.value)}
            type="number" 
            id="expected-return" 
            value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event) => inputHandler('duration', event.target.value)}
            type="number" 
            id="duration" 
            value={userInput['duration']} // or userInput.duration
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button onClick={resetHandler} type="reset" className={classes["buttonAlt"]}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}
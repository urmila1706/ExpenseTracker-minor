import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
 const [enteredDate, setEnteredDate] = useState("");
 const [enteredLocation, setEnteredLocation] = useState("");


  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
  };
   const amountChangehadler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
  
    setEnteredDate(event.target.value);
 };
 const locationChangeHandler = (event) => {
  
  setEnteredLocation(event.target.value);
}
  
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location:enteredLocation,
    };
    props.onSaveExpenses(ExpenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredLocation('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expence__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangehadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-06-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>cancel</button>
        <button type="submit">Add Expense</button>
        
      </div>
            
    </form>
  
  );
};
export default ExpenseForm;
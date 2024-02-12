import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
 const [entereDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
  };
   const amountChangehadler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
  
    setEnteredDate(event.target.value);
 };

  
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenceData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(entereDate),
    };
    console.log(ExpenceData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expence__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangehadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-06-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
 const [entereDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
   enteredTitle(event.target.value);
   setEnteredTitle(event.target.value);
  };
   const amountChangehadler = (event) => {
 enteredAmount(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
  entereDate(event.target.value);
    setEnteredDate(event.target.value);
 };

  //2nd way of doing
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   entereDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // const amountChangehadler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     entereDate: event.target.value,
  //   });
  // };
  //3rd way of doing this
//   const [userInput, setUserInput] = useState({
//    enteredTitle: '',
//   enteredAmount: '',
//     entereDate: ''
//    });
//   const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredTitle: event.target.value };
//     });
//    };
//  const amountChangehadler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredAmount: event.target.value };
//   });
//   };
//   const dateChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return { ...prevState, enteredDate: event.target.value };
//    });
//    };
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
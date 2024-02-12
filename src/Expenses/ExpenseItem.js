import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "../Expenses/ExpenseDetails";
function ExpenseItem(props) {
  const [title, setTitle]=useState(props.title);
  console.log('Expense item should be evaluated by react');
  const clickHandler = () => {
   // event.target.parentNode.remove();
   // title='updated!';
    // event.target.parentNode.remove();
    setTitle('updated!');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>title</h2>
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
            <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
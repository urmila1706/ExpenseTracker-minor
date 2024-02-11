import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "../Expenses/ExpenseDetails";
function ExpenseItem(props) {
const [a, setAmount] = useState(props.amount);
  const clickHandler = (event) => {
   // event.target.parentNode.remove();
    setAmount(100);
    // event.target.parentNode.remove();
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={a}
      />
            <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
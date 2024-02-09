import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "../Expenses/ExpenseDetails";
const ExpenseItem=(props) =>{
  const clickHandler=(event)=>{
    event.target.parentNode.remove();
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
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
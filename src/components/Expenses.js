import ExpenseItem from './ExpenseItem';
import Card from "./Card";
import './Expenses.css';
function Expenses(){
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "Austria",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "Australia",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Denmark",
    },
    {
      id: "e4",
      title: "New Mobile",
      amount: 10000,
      date: new Date(2021, 6, 12),
      LocationOfExpenditure: "New Orliance ",
    },
    {
      id: "e5",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
      LocationOfExpenditure: "Pyarish ",
    },
  ];

return(
        <Card className="expenses">
                  {expenses.map((expense, key) => {
        return (
          <div>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          ></ExpenseItem>
          </div>
        );
      })}
        </Card>
    );
}
export default Expenses;
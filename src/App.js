import "./App.css";
import Expenses from "./Expenses/Expenses";

function App() {
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
  ];
  return (

    <div >
      <h1>React Js</h1>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;
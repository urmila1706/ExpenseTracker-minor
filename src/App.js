//import React, {useState} from 'react';
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./Expenses/NewExpense/NewExpense";
function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expenses></Expenses>
    </div>
  );
}
export default App;
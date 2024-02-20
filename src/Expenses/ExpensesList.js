import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList=(props)=>{

    if(props.items.length===1){
        return <h2 className="expenses-list__fallback">"Only Single Expense Here.Please add more..."</h2>
    }
    return <ul className="expenses-list">
{props.items.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.LocationOfExpenditure}
          />
        </div>
      ))}
    </ul>
}
export default ExpensesList;
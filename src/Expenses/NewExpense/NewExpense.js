import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const saveExpensesDataHandler=(enteredExpensesData)=>{
        const ExpensesData={
        ...enteredExpensesData,
        id : Math.random().toString()

        };
        console.log(ExpensesData.id);
       props.onAddExpenses(ExpensesData)
      
    };
return <div className='new-expense'>
   
    <ExpenseForm onSaveExpenseData={saveExpensesDataHandler}/>
</div>
}
export default NewExpense;
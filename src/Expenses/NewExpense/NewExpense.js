import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
   const[isEditing,setIsEditing]= useState(false);
    const saveExpensesDataHandler=(enteredExpensesData)=>{
        const ExpensesData={
        ...enteredExpensesData,
        id : Math.random().toString()

        };
       //console.log(ExpensesData.id);
       props.onAddExpenses(ExpensesData);
       setIsEditing(false);
      
    };
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
       setIsEditing(false);
   }
return <div className='new-expense'>
{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
   
{isEditing && <ExpenseForm onSaveExpenses={saveExpensesDataHandler} onCancel={stopEditingHandler}/>

 }   
</div>
}
export default NewExpense;
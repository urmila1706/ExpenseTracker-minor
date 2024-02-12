import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
   const [title, enteredTitle]= useState('');
   const [amount, enteredAmount]= useState('');
   const [date, enteredDate]= useState('');
    //document.getElementById('').addEventListener('click',(event)=>{})
    const titleChangeHandler=(event)=>{
        enteredTitle(event.target.value);
        console.log(title);
    };
    const amountChangeHandler=(event)=>{
        enteredAmount(event.target.value);};
        console.log(amount);
        const dateChangeHandler=(event)=>{
            enteredDate(event.target.value);};
            console.log(date);

    return <form>
<div className="new-expense__controls">
<div className="new-expense__control">
<label>Title</label>
<input type="text" onChange={titleChangeHandler}

/>
</div>
<div className="new-expense__control">
<label>Amount</label>
<input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
</div>
<div className="new-expense__control">
<label>Date</label>
<input type='date' min="2020-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
</div>

</div>
<div className="new-expense__actions">
    <button type="submit">Add Expense</button>
</div>
</form>
}
export default ExpenseForm;
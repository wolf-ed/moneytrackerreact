import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(1);
    const [enteredDate, setEnteredDate] = useState("2023-1-1");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


    return (
        <form>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Date</label>
                <input type="date" min="2022-01-07" max="2024-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className='new__expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
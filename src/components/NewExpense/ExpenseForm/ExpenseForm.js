import React, { useState, Fragment } from 'react';
import './ExpenseForm.css';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

//Parent component of ExpenseForm: NewExpense
const ExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [error, setError] = useState();
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); //prevents the page reloading when submit is called
        if(
            enteredtitle === '' ||
            enteredAmount === '' ||
            enteredDate === ''
        ){
            setError(
                {
                    title: 'Empty input fields',
                    message: 'Please fill all the fields'
                }
            )
            return;
        }else{
            const expenseDate = {
                title: enteredtitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            };
            props.onSaveExpenseData(expenseDate);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
            hideDisplay();
        }


    };

    const hideDisplay = () => {
        props.onClickHide(false);
    }

    const hideErrorModal = () => {
        setError(null);
    }

    return (<Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onHide={hideErrorModal}/>}
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Title</label>
                <input
                    type="text"
                    value={enteredtitle}
                    onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Amount</label>
                <input
                    type="number"
                    value={enteredAmount}
                    min="0.01" step="0.01"
                    onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__controls' >
                <div className='new-expense__control' ></div>
                <label>Date</label>
                <input
                    type="date"
                    value={enteredDate}
                    min="2022-01-07" max="2024-12-31"
                    onChange={dateChangeHandler} />
            </div>
            <div className='new__expense__actions'>
                <Button type="submit">Add Expense</Button>
                <Button type="button" onClick={hideDisplay}>Cancel</Button>
            </div>
        </form>
        </Fragment>
    );
}

export default ExpenseForm;
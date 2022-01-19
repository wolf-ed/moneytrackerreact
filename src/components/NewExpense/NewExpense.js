import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import Button from '../UI/Button/Button';

//Parent component of NewExpense: App.js
const NewExpense = (props) => {
    const [containerState, setcontainerStatus] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: props.toCreateId()
        };
        props.onAddExpense(expenseData);
    };

    const displayExpenseFormContainer = newVal => {
        setcontainerStatus(newVal);
    }
    const showDisplay = () =>{
        displayExpenseFormContainer(true)
    }


    return (<div className="new-expense">
        {containerState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickHide={displayExpenseFormContainer} />}
        {!containerState && <Button onClick={showDisplay}>Add new Expense</Button>}
    </div>)
}

export default NewExpense;
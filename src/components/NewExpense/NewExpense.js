import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // TODO fix this so the same value is not generated twice
        };
        props.onAddExpense(expenseData);
    };

    return (<div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>)
}

export default NewExpense;
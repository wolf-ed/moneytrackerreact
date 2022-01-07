import React from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const Expenses = (props) => {

    return (
        <div className="expenses">
            {
                props.items.map((expense, i) => {
                    return(<ExpenseItem
                    key={i++}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />)
                })
            }
        </div>
    )

}

export default Expenses;




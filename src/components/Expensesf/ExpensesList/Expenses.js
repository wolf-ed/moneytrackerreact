import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import '../ExpensesFilter/ExpensesFilter.css';

//Parent Component of Expenses is App.js
const Expenses = (props) => {
const [year, setYear] = useState('2022');
const setReceivedYear = receivedYear => {
    setYear(receivedYear);
}

    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={year} onChangeSetSelectedYear={setReceivedYear}/>
            {
                props.items.map((expense, i) => {
                    return(<ExpenseItem
                    key={expense.id}
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




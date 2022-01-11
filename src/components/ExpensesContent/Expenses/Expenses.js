import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import '../ExpensesFilter/ExpensesFilter.css';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart';

//Parent Component of Expenses is App.js
const Expenses = (props) => {
    const [year, setYear] = useState('2022');
    const setReceivedYear = receivedYear => {
        setYear(receivedYear);
    }

    const filterByYear = props.items.filter(expenseYear => { return expenseYear.date.getFullYear().toString() === year });



    return (
        <div className="expenses">
            <ExpensesFilter
                selectedYear={year}
                onChangeSetSelectedYear={setReceivedYear}
            />
            <ExpensesChart expenses={filterByYear} />
            <ExpensesList items={filterByYear} />
        </div>
    )

}

export default Expenses;




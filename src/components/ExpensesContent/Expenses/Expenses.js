import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import '../ExpensesFilter/ExpensesFilter.css';
import ExpensesList from '../ExpensesList/ExpensesList';

//Parent Component of Expenses is App.js
const Expenses = (props) => {
const [year, setYear] = useState('2022');
const setReceivedYear = receivedYear => {
    setYear(receivedYear);
}

const filterByYear = props.items.filter(expenseYear => 
    {return expenseYear.date.getFullYear().toString() === year});



    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={year} onChangeSetSelectedYear={setReceivedYear}/>
            {
                <ExpensesList items={filterByYear}/>
            }
        </div>
    )

}

export default Expenses;




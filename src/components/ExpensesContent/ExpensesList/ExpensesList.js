import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';


//Parent Component: Expenses.js
const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>No expenses during the year selected.</h2>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => {
                return (<ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onDeleteFromList={props.onDelete}
                />)
            })}
        </ul>
    )
} //end of ExpensesList

export default ExpensesList;
import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

// Parent Component: Expenses.js
const ExpenseItem = (props) => {
    const deleteExpense = () => {
        props.onDeleteFromList(props.id);
    }
    return (
        <li >
            <Card className="expense-item" >
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    <button type="button" onClick={deleteExpense}>Delete</button>
                </div>
            </Card>
        </li>);
}

export default ExpenseItem;
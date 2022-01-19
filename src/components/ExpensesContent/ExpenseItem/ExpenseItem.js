import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button'

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
                    <Button type="button" onClick={deleteExpense}>Delete</Button>
                </div>
            </Card>
        </li>);
}

export default ExpenseItem;
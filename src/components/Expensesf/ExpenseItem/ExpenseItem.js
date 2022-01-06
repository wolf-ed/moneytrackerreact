import { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';


const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitleClickHandler = () => {
     setTitle('Updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={changeTitleClickHandler}>Change Title</button>
            </div>
        </Card>);
}

export default ExpenseItem;
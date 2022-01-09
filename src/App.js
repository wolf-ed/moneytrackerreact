import {useState} from 'react';
import './App.css';
import Expenses from './components/Expensesf/ExpensesList/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const defaultExpenses = [
  { id: 'e1', title: "Udemy course", amount: 9.99, date: new Date(2022, 0, 5)},
  { id: 'e2', title: "Code complete", amount: 16.50, date: new Date(2021, 7, 12)},
  { id: 'e3', title: "Data structure", amount: 23.99, date: new Date(2020, 10, 8)}
]

const App = () => {
 const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {return [expense, ...prevExpenses]})
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

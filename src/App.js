import { useState } from 'react';
import './App.css';
import Expenses from './components/ExpensesContent/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const defaultExpenses = [
  { id: 'e5', title: "Book: React TDD", amount: 31.18, date: new Date(2022, 0, 5) },
  { id: 'e4', title: "Book: React Hooks", amount: 42.55, date: new Date(2022, 0, 3) },
  { id: 'e3', title: "Udemy course", amount: 9.99, date: new Date(2021, 0, 1) },
  { id: 'e2', title: "Book: Code complete", amount: 16.50, date: new Date(2020, 7, 12) },
  { id: 'e1', title: "Book: Think Data structure", amount: 27.50, date: new Date(2019, 10, 8) }
]

const App = () => {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] })
  }

  let createId = () => {
    return (expenses.length + 1).toString();
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} toCreateId={createId} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

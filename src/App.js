import { useState } from 'react';
import './App.css';
import Expenses from './components/ExpensesContent/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const rawDefaultExpenses = [
  { id: 'e13', title: "Book: React TDD", amount: 31.18, date: new Date(2022, 0, 5) },
  { id: 'e12', title: "Book: React Hooks", amount: 42.55, date: new Date(2022, 0, 3) },
  { id: 'e11', title: "Udemy course", amount: 9.99, date: new Date(2021, 0, 1) },
  { id: 'e10', title: "Book: Code complete", amount: 16.50, date: new Date(2020, 7, 12) },
  { id: 'e9', title: "Dinner out", amount: 66.50, date: new Date(2020, 1, 1) },
  { id: 'e8', title: "New table", amount: 200.00, date: new Date(2020, 9, 30) },
  { id: 'e7', title: "Clothes", amount: 420.90, date: new Date(2020, 3, 25) },
  { id: 'e6', title: "Dinner out", amount: 100.0, date: new Date(2020, 11, 29) },
  { id: 'e5', title: "RAM", amount: 230.50, date: new Date(2020, 3, 10) },
  { id: 'e4', title: "Headphones", amount: 160.50, date: new Date(2019, 6, 6) },
  { id: 'e3', title: "New Mouse", amount: 70.00, date: new Date(2019, 11, 5) },
  { id: 'e2', title: "Book: Getting things done", amount: 16.50, date: new Date(2019, 2, 19) },
  { id: 'e1', title: "Smartwatch", amount: 260.00, date: new Date(2019, 9, 10) }
]

const compareDates = (a, b) => {
if(a.date > b.date ){
  return -1;
}
if(a.date < b.date){
  return 1
}
return 0;
}

const defaultExpenses = rawDefaultExpenses.sort(compareDates);

const App = () => {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { 
      return  [expense, ...prevExpenses].sort(compareDates)})
  }

  let createId = () => {
    return (expenses.length + 1).toString();
  }

  const deleteExpenseHandler = (expenseID) => {
    setExpenses(prevExpenses => {
      const updateExpenses = prevExpenses.filter(expenseItem => expenseItem.id !== expenseID)
      return updateExpenses;
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} toCreateId={createId} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler}/>
    </div>
  );
}

export default App;

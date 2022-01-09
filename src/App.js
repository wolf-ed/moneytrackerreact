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

  let createId = () =>{
    // while(defaultExpenses.includes(newId)){
    //   newId = Math.floor(Math.random() * (defaultExpenses.length + 3));
    // }
    for(let i = 0; i < 1; i++){
      let arLength = defaultExpenses.length;
      let newId = Math.floor(Math.random() * (arLength * 99000)).toString();
      if(!defaultExpenses.some(num => num === newId)){
        return newId;
      }else{
        i--
        return Math.floor(Math.random() * (arLength * 99000)).toString();
          
      }
    }
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} toCreateId={createId}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

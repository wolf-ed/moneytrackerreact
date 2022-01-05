import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: "Udemy course", amount: 9.99, date: new Date(2022, 0, 5) }
  ]
  return (
    <div>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

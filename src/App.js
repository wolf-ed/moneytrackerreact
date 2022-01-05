import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: "Udemy course", amount: 9.99, date: new Date(2022, 0, 5)},
    { id: 'e2', title: "Code complete", amount: 16.50, date: new Date(2021, 7, 12)},
    { id: 'e3', title: "Data structure", amount: 23.99, date: new Date(2020, 10, 8)}
  ]
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

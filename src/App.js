import './App.css';
import Expenses from './components/Expense/Expenses';

function App() {

  const expenses = [
    {
        title: 'Expense 1',
        date: new Date(2021, 0, 1),
        price: 90.2
    },
    {
        title: 'Expense 2',
        date: new Date(2021, 1, 10),
        price: 91.2
    },
    {
        title: 'Expense 3',
        date: new Date(2021, 2, 30),
        price: 95.2
    },
    {
        title: 'Expense 4',
        date: new Date(2021, 3, 15),
        price: 12.2
    }
]
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

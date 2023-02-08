import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Lava no carro",
    amount: 10.5,
    date: new Date(2023, 2, 6),
  },
  {
    id: "e2",
    title: "Lava no carro",
    amount: 10.5,
    date: new Date(2023, 2, 6),
  },
  {
    id: "e3",
    title: "Lava no carro",
    amount: 10.5,
    date: new Date(2023, 2, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(INITIAL_EXPENSES);

  function addExpenseHandler(expense: any) {
    setExpenses((prevState) => [...prevState, expense]);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;

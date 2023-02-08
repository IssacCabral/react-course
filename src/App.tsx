import { useState } from "react";
import Expenses from "./components/Expenses";
import { Expense } from "./components/interfaces";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Car Wash",
    amount: 20.56,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e6",
    title: "Mouse",
    amount: 45,
    date: new Date(2023, 5, 12),
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

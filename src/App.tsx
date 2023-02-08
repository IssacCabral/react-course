import { useState } from "react";
import Expenses from "./components/Expenses";
import { Expense } from "./components/interfaces";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Lavada no carro",
    amount: 10.5,
    date: new Date(2023, 3, 6),
  },
  {
    id: "e2",
    title: "Registro do fogão",
    amount: 60,
    date: new Date(2022, 2, 6),
  },
  {
    id: "e3",
    title: "Bucha de canhão",
    amount: 130,
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

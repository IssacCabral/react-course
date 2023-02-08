import { useState } from "react";
import { Expense } from "../interfaces";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import "./styles.css";

interface ExpensesProps {
  items: Array<Expense>;
}

const Expenses = ({ items }: ExpensesProps) => {
  const [filteredYear, setFilteredyear] = useState<string>("2022");

  function filterChangeHandler(selectedYear: string) {
    setFilteredyear(selectedYear);
  }

  const filteredExpenses: any = items.filter(
    (expense) => expense.date.getFullYear().toString() == filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

import { useState } from "react";
import { Expense } from "../interfaces";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { ExpensesFilter } from "./ExpensesFilter";
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

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item: any) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        expenseAmount={item.amount}
        expenseDate={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;

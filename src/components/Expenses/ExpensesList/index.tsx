import { Expense } from "../../interfaces";
import ExpenseItem from "./ExpenseItem";
import "./styles.css";

interface ExpensesListProps {
  items: Array<Expense>;
}

export const ExpensesList = ({ items }: ExpensesListProps) => {
  if (items.length == 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item: any) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          expenseAmount={item.amount}
          expenseDate={item.date}
        />
      ))}
    </ul>
  );
};

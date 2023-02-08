import { ExpenseForm } from "./ExpenseForm";
import "./styles.css";

interface NewExpenseProps {
  onAddExpense: (data: any) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  function saveExpenseDataHandler(enteredExpenseData: any) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

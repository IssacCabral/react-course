import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./styles.css";

interface NewExpenseProps {
  onAddExpense: (data: any) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData: any) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  let newExpenseContent = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
    />
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;

import { useState } from "react";
import "./styles.css";

interface ExpenseFormProps {
  onSaveExpenseData: (data: any) => void;
  onCancel: () => void;
}

export const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");

  function titleChangeHandler(event: any) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event: any) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event: any) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event: any) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => titleChangeHandler(event)}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => amountChangeHandler(event)}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-02-06"
            max="2023-12-31"
            onChange={(event) => dateChangeHandler(event)}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => props.onCancel()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

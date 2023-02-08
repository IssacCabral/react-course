import "./styles.css";

interface ExpenseDateProps {
  expenseDate: Date;
}

const ExpenseDate = ({ expenseDate }: ExpenseDateProps) => {
  const expenseMonth = expenseDate.toLocaleDateString("pt-BR", {
    month: "long",
  });
  const expenseDay = expenseDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
  });
  const expenseYear = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{expenseDay}</div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </div>
  );
};

export default ExpenseDate;

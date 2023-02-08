import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./styles.css";

interface ExpenseItemProps {
  title: string;
  expenseDate: Date;
  expenseAmount: number;
}

const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">R$ {props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

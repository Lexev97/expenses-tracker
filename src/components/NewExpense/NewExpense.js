import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisibility, setformVisibility] = useState(false);
  
  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };
  
  const pressHandler = () => {
    setformVisibility(true);
  };
  const cancelHandler = () => {
    setformVisibility(false);
  };

  return (
    <div className="new-expense">
      {!formVisibility && <button type='button' onClick={pressHandler}>Add New Expense</button>}
      {formVisibility && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandeler}
        onCancel={cancelHandler}
      />}
    </div>
  );
};

export default NewExpense;

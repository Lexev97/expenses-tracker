import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filtredYear, setFiltredYear] = useState("2022");

  const passSelectedYearHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter((expenseData) => {
    return expenseData.date.getFullYear().toString() === filtredYear;
  });

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          selected={filtredYear}
          onPassSelectedYear={passSelectedYearHandler}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

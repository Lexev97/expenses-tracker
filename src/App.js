import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2021, 1, 28),
    title: "Car insurance",
    amount: 100,
  },
  {
    id: "e2",
    date: new Date(2022, 1, 30),
    title: "Internet",
    amount: 10,
  },
  {
    id: "e3",
    date: new Date(2020, 2, 4),
    title: "MacBook pro 16 M1 max",
    amount: 3485.5,
  },
  {
    id: "e4",
    date: new Date(2022, 2, 5),
    title: "Holidays in Prague",
    amount: 1500,
  },
  {
    id: "e5",
    date: new Date(2022, 2, 5),
    title: "Theater",
    amount: 58,
  },
  {
    id: "e6",
    date: new Date(2020, 2, 5),
    title: "Jacket",
    amount: 210,
  },
  {
    id: "e7",
    date: new Date(2021, 2, 5),
    title: "Wrist watch",
    amount: 49,
  },
];

//const App = () => {
//OR:
function App() {
  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expenseData) => {
    setExpenseData((prevExpenseData) => {
      return [expenseData, ...prevExpenseData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expenseData} />
    </div>
  );

  // Old React code:
  //
  //return React.createElement(
  //  "div",
  //  {},
  //  React.createElement("h2", {}, "Let's get started!"),
  //  React.createElement(ExpenseList, { item: expenses })
  //);
}

export default App;

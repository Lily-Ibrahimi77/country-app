import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

function NewExpense({ onAddExpense }) {
  const addDataHandler = (formsExpenseData) => {
    const expenseData = {
      ...formsExpenseData,
      id: crypto.randomUUID(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddData={addDataHandler} />
    </div>
  );
}

export default NewExpense;

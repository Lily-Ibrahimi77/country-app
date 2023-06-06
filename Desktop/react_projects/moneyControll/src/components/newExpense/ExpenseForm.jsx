import React, { useState } from "react";
import moment from "moment";

import "./ExpenseForm.css";
function ExpenseForm({ onAddData }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formsExpenseData = {
      title: title,
      amount: amount,
      date: moment(date, "YYYY-MM-DD").toDate(),
    };

    onAddData(formsExpenseData);
    setTitle("");
    setAmount(0);
    setDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={onChangeTitle} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onChangeAmount}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-01-12"
            onChange={onChangeDate}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

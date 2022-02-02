import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UserInterface/Card";

import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  // function clickHandler () {...
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(`El ${title} ha cambiado su nombre a 'Updated'!`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItems;

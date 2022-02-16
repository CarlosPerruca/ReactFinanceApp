import React, { userState } from "react";

import ExpenseItems from "./ExpenseItems";
import Card from "../UserInterface/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";
// function Expenses(props) {}
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = userState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItems
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItems
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItems
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItems
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </>
  );
};

export default Expenses;

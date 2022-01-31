import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  let day = props.date.toLocaleString("en-UE", { day: "2-digit" });
  let month = props.date.toLocaleString("en-UE", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;

import "./ExpenseItems.css";

function ExpenseItems(props) {
  let day = props.date.toLocaleString("en-UE", { day: "2-digit" });
  let month = props.date.toLocaleString("en-UE", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}€</div>
    </div>
  );
}

export default ExpenseItems;

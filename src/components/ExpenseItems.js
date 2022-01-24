import "./ExpenseItems.css";

function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>January 24th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">199.65€</div>
    </div>
  );
}

export default ExpenseItems;

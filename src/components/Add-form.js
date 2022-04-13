import React, { useState } from "react";
import "./AddForm.css";
function Addform() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const inputChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    //   const val = parseFloat();
    setAmount(e.target.value);
  };
  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="given name to your expenditure"
          value={title}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input className="amount-input"
          type="number"
          placeholder="enter amount"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="category-container-parent">
      <div className="category">
          <div >
              <label>Category</label>
              
          </div>
      </div>

      </div>
    </div>
  );
}

export default Addform;

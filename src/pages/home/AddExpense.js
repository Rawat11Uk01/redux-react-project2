import React from "react";
import TopFold from "../../components/TopFold";
import './AddExpense.css'
import Addform from "../../components/Add-form";

function AddExpense() {
  return (
    <div className="add-expense">
      <TopFold />
      <Addform/>
    </div>
  );
}

export default AddExpense;

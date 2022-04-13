import React from "react";
import "./ExpenseList.css";
import Card from "./Card";
function ExpenseList() {
  const list = [
    {
      title: "made a purchase",
      logo: "ass",
      createdAt: Date.now(),
      amount: 1324,
    },
  ];
  return <div>
    {list.length>0 && list.map((a)=> <div>
        <Card item={a}/>
    </div>)}

  </div>;
}

export default ExpenseList;

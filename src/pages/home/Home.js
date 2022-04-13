import React from "react";
import ExpenseList from "../../components/ExpenseList";
import TopFold from "../../components/TopFold";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList/>
    </div>
  );
}

export default Home;

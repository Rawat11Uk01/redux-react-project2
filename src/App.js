import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddExpense from "./pages/home/AddExpense";
import "./App.css";
import { Router } from "react-router-dom";
import { Route,Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path='/add-expense'>
        <AddExpense/>
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

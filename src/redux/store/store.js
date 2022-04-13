import { createStore } from "redux";
import { expenseReducer } from "../reducers/expenseReducer";

const initialState = {};
const store = createStore(expenseReducer,initialState);

export default store;

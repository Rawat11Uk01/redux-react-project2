
import { ADD_ITEM } from "../action-types/actionTypes";
import { REMOVE_ITEM } from "../action-types/actionTypes";

const initialState =  {
expenseList: []
};

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: return{
           ...state,
           expenseList :[ state + action.payload]
        }
        case REMOVE_ITEM: return{
            ...state,
            expenseList : state.filter((a)=>a.id !== action.payload)
        }
           
    
        default:
             return state;
    }
};

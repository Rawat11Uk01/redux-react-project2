import { ADD_ITEM } from "../action-types/actionTypes";
import { REMOVE_ITEM } from "../action-types/actionTypes";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    paylod: payload,
  };
};
export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    paylod: payload,
  };
};

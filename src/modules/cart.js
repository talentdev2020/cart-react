import { createAction, handleActions } from 'redux-actions';

const ADDCART = 'ADDCART';
const DELETECART = 'DELETECART';
const initialState = {
  carts: localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")): [],
};

export const addCart = createAction(ADDCART);
export const deleteCart = createAction(DELETECART);

const actions = handleActions(
  {
    [ADDCART]: (state, action) => {
      state.carts.push({
        ...action.payload,
        id: Date.now() + state.carts.length
      });
      localStorage.setItem("carts", JSON.stringify(state.carts))
      return {
        ...state,
        carts: state.carts.slice()
      }
    },
    [DELETECART]: (state, action) => {
      const carts = state.carts.filter(item => item.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(carts))
      
      return {
        ...state,
        carts
      }
    },
  },
  initialState,
);

export default actions;

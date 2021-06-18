import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import product, { productSaga } from './product';
import cart from './cart';

const rootReducer = combineReducers({
  product,
  cart
});

export function* rootSaga() {
  yield all([productSaga()]);
}

export default rootReducer;

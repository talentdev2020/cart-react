import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import collection, { collectionSaga } from './collection';
import cart from './cart';

const rootReducer = combineReducers({
  collection,
  cart
});

export function* rootSaga() {
  yield all([collectionSaga()]);
}
export default rootReducer;

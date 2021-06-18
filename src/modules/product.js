import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from '../lib/api';

const GETDATA = 'GETDATA';
const SETDATA = 'SETDATA';
const initialState = {
  products: [],
};

export const getProducts = createAction(GETDATA);

function* getDataSaga() {
  try {
    const products = yield call(getData);
    yield put({ type: SETDATA, payload: products.data });
  } catch (e) {
  }
}

export function* productSaga() {
  yield takeLatest(GETDATA, getDataSaga);
}
const actions = handleActions(
  {
    [SETDATA]: (state, action) => ({
      ...state,
      products: action.payload,
    })
  },
  initialState,
);
export default actions;

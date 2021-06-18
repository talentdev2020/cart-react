import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getData } from '../lib/api';

const GETDATA = 'GETDATA';
const SETDATA = 'SETDATA';
const initialState = {
  collection: [],
};

export const getProducts = createAction(GETDATA);
function* getDataSaga() {
  try {
    const collection = yield call(getData);
    yield put({ type: SETDATA, payload: collection.data });
  } catch (e) {
  }
}

export function* collectionSaga() {
  yield takeLatest(GETDATA, getDataSaga);
}
const actions = handleActions(
  {
    [SETDATA]: (state, action) => ({
      ...state,
      collection: action.payload,
      isError: false,
    })
  },
  initialState,
);
export default actions;

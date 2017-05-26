import { put, call } from 'redux-saga/effects';
import * as type from '../constants/actionTypes';
import userInput from '../algorithm/searchingAlgorithm';

export function* calculateRoute({ payload }) {
  console.log('i\'m hit!');
  try {
    const location = 'CAPRA WAY,SCOTT ST';
    const destination = 'FRANCISCO ST,BAKER ST';
    const response = yield call(userInput, location, destination);
    yield put({ type: type.GET_DIRECTIONS, payload: response });
  } catch (error) {
    yield put({ type: type.FAILED_ROUTE, payload: error });
  }
}

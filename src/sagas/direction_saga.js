import { call, put } from 'redux-saga/effects';
import * as type from '../constants/actionTypes';

export function* getDirections({ payload }) {
  console.log(payload);
  const getLatLng = (data) => {
  	const result = [data[0]];
    for (let i = 1; i < data.length; i++) {
      if (data[i].intersection1[0] !== data[i - 1].intersection1[0] ||
	       data[i].intersection1[1] !== data[i - 1].intersection1[1]) {
        result.push(data[i]);
      }
    }
    return result;
  };
  try {
    yield call(getLatLng, payload);
    yield put({ type: type.ADD_ROUTE });
  } catch (error) {
    console.log(error);
  }
}

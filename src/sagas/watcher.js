import { takeEvery } from 'redux-saga/effects';
import * as type from '../constants/actionTypes';
import { calculateRoute } from './route_saga';
import { getDirections } from './direction_saga';

export default function* watchRoutes() {
  yield takeEvery(type.CALCULATE_ROUTE, calculateRoute);
  yield takeEvery(type.GET_DIRECTIONS, getDirections);
}

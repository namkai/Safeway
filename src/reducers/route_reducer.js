import * as type from '../constants/actionTypes';

export default function (state = [], action) {
  console.log('i\'m the action!', action);
  switch (action.type) {
    case type.ADD_ROUTE:
      return action.payload;
    default:
      return state;

  }
}

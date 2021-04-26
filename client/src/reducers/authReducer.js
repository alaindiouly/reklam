import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      // empty string (when user is not  logged in) evaluates as falsy
      // making sure returns false
      return action.payload || false;
    // return { ...state, auth: action.payload || false };

    default:
      return state;
  }
}

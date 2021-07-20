import { GET_SUMMARY } from "../actions/types";
import _ from 'lodash';

export default (state=[], action) => {
  switch(action.type) {
    case GET_SUMMARY:
      return { ...state, data:action.payload }
    default:
      return state;
  }
}
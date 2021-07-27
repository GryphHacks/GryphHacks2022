import { GET_SUMMARY } from "../actions/types";
// import _ from 'lodash';

const apiReducer = (state=[], action) => {
  switch(action.type) {
    case GET_SUMMARY:
      return { ...state, data:action.payload }
    default:
      return state;
  }
}

export default apiReducer;
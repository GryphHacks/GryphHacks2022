import { GET_SUMMARY } from "./types";
import axios from 'axios';

export const getSummary = () => {
  return async dispatch => {
    const response = await axios.get('https://api.covid19api.com/summary');
    dispatch({ type: GET_SUMMARY, payload: response.data });
  }
}
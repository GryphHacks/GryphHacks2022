import { FETCH_PRODUCTS, FETCH_PRODUCT } from "./types";
import { commerce } from '../lib/commerce';
import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  const response = await commerce.products.list();
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
}

export const fetchProduct = id => async dispatch => {
  const response = await axios.get(`https://api.chec.io/v1/products/${id}`, {
    headers: {
      'X-Authorization': 'pk_314950a3721452ae61165dddc55baed5da062a9149f38'
    }
  });
  // console.log(response)
  dispatch({ type: FETCH_PRODUCT, payload: response.data });
}
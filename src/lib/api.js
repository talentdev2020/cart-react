import axios from 'axios';

export const getData = () => {
  return axios.get(process.env.REACT_APP_API_URL + '/get-products');
};

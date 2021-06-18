import axios from 'axios';

export const getData = () => {
  return axios.get('https://main-api.fulhaus.com/fulhaus-tech-test/get-products');
};

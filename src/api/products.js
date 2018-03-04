import axios from 'axios';
import queryString from 'query-string';

const linkProducts = `${process.env.ENDPOINT}/api/products`;

// filterField, filterValue
const getProducts = (opts) => {
  let query = '';

  if (opts) {
    const parsedQuery = Object.keys(opts).map(key => `${key}=${opts[key]}`).join('&');
    query += '?'.concat(parsedQuery);
  }

  return axios.get(`${linkProducts}${query}`)
    .then(response => response.data)
    .catch((error) => { throw new Error(error); });
};

const getLastaddedProducts = limit =>
  axios.get(`${linkProducts}?limit=${limit}&lastadded=true`)
    .then(response => response.data)
    .catch((error) => { throw new Error(error); });

const getRecommendedProducts = limit =>
  axios.get(`${linkProducts}?limit=${limit}&recommended=true`)
    .then(response => response.data)
    .catch((error) => { throw new Error(error); });

const getWomanProducts = (opts) => {
  const { limit = 20, offset = 0, sort = 'purchased', order = 'desc', cat, size } = opts;
  let link = `${linkProducts}?woman=true&limit=${limit}&offset=${offset}&sort=${sort}&order=${order}`;

  if (cat) {
    const categories = queryString.stringify({ cat }, { arrayFormat: 'bracket' });
    link += `&${categories}`;
  }
  if (size) {
    const sizes = queryString.stringify({ size }, { arrayFormat: 'bracket' });
    link += `&${sizes}`;
  }

  return axios.get(link)
    .then(response => response.data)
    .catch((error) => { throw new Error(error); });
};

const getProductByModel = (opts) => {
  const { model } = opts;
  return axios.get(`${linkProducts}?ids[0]=${model}`)
  .then(response => response.data[0])
  .catch((error) => { throw new Error(error); });
};

export default {
  getProducts,
  getLastaddedProducts,
  getRecommendedProducts,
  getWomanProducts,
  getProductByModel,
};

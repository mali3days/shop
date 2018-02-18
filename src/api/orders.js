import axios from 'axios';

const sendOrder = order =>
    axios.post('https://shop2018.herokuapp.com/api/orders', order)
    .then(response => response.data)
    .catch(error => error);

export default {
  sendOrder,
};

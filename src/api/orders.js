import axios from 'axios';

const sendOrder = order =>
    axios.post('http://localhost:4040/api/orders', order)
    .then(response => response.data)
    .catch(error => error);

export default {
  sendOrder,
};

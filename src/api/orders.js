import axios from 'axios';

const sendOrder = order =>
    axios.post(`${process.env.ENDPOINT}/api/orders`, order)
    .then(response => response.data)
    .catch((error) => { throw new Error(error); });

export default {
  sendOrder,
};

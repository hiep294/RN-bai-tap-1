import Axios from 'axios';

const jsonplaceholderAxios = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default jsonplaceholderAxios;

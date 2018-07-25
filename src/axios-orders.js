import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-ab8c1.firebaseio.com/',
});

export default instance;
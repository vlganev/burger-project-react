import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b331a.firebaseio.com/'
});

export default instance;
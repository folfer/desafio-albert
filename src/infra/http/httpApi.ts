import axios from 'axios';

export const httpApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

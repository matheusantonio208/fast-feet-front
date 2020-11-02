/*
 * Import this file to connect in exampleApi
 */
import axios from 'axios';

const fastFeetApi = axios.create({
  baseURL: 'http://localhost:8283',
});

export default fastFeetApi;

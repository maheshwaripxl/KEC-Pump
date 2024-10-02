import axios from 'axios';

export const BASE_URL = 'https://kecpump.reviewdevelopment.net/api/';

const constructApiRequest = (path, method, body) => ({
  url: path,
  method: method,
  data: body,
});

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const requests = {
  get: path => Axios(constructApiRequest(path, 'get')),
  post: (path, params) => Axios(constructApiRequest(path, 'post', params)),
  put: (path, params) => Axios(constructApiRequest(path, 'put', params)),
  delete: path => Axios(constructApiRequest(path, 'delete')),
};

// add request path here
const requestPath = {
  //Get request
  get1stQuestion: 'auth/questions',

  //post request
  postQuestionsId: 'auth/getQuestion',

  // post multi options
  PostmultiOptions: 'auth/getmultiQuestion',

  // post contact info
  postContactInfo: 'auth/contact',
};

const ApiManager = {
  // Get API
  get1stQuestion: () => {
    return requests.get(`${requestPath.get1stQuestion}`);
  },

  getAllCountries: () => {
    const API_URL = 'https://restcountries.com/v3.1/all';
    return axios.get(API_URL);
  },

  // Post API

  postQuestionsId: params => {
    return requests.post(`${requestPath.postQuestionsId}`, params);
  },

  postmultiOptions: params => {
    return requests.post(`${requestPath.PostmultiOptions}`, params);
  },

  postContactForm: params => {
    return requests.post(`${requestPath.postContactInfo}`, params);
  },
};

export default ApiManager;

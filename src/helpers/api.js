import axios from 'axios';
import { getDomain } from './getDomain';

export const api = axios.create({
  baseURL: getDomain(),
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token  =  localStorage.getItem("token");
  if (token) {
    config.headers.Token = token;
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});





export const handleError = error => {
  const response = error.response;
  console.log("error string", response)
  // catch 4xx and 5xx status codes
  if (response && !!`${response.status}`.match(/^[4|5]\d{2}$/)) {
    let info = `\nrequest to: ${response.request.responseURL}`;

    if (response.data.status) {
      info += `\nstatus code: ${response.data.status}`;
      info += `\nerror: ${response.data.error}`;
      info += `\nerror message: ${response.data.error}`;
    } else {
      info += `\nstatus code: ${response.status}`;
      info += `\nerror message:\n${JSON.stringify(response.data["errorMessage"])}`;
    }

    console.log('The request was made and answered but was unsuccessful.', error.response);
    return info;
  } else {
    if (error.message.match(/Network Error/)) {
      alert('The server cannot be reached.\nDid you start it?');
    }

    console.log('Something else happened.', error);
    return error.message;
  }
};


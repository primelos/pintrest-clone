import axios from 'axios';
// require("dotenv").config();

// console.log(process.env);
// console.log(process.env.REACT_APP_ACCESSKEY);
export default axios.create({
  baseUrl: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID process.env.REACT_APP_ACCESSKEY`,
  },
});
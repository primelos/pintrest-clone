import axios from 'axios';
require("dotenv").config();


export default axios.create({
  baseUrl: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID FzREGuKfJCsPMOxq1TPD7erNJ3sBimgAQblEZoZ2g6g`,
  },
});
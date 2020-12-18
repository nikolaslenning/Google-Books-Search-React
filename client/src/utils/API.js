import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = process.env.GOOGLE_API_KEY;
// const APIKEY = "+inauthor:keyes&key=AIzaSyBVTohIu0ToHGKtgPpHgXnTpVKg3xdY_6M";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};

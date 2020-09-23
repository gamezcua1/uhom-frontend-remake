import axios from "axios";

const fetcher = (url, params = {}, headers = {}) =>
  axios({
    url: url,
    headers: headers,
    params: params,
    timeout: 1000,
  });

export default fetcher;

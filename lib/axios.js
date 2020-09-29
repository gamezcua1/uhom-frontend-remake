import axios from "axios";

import { setHeaders } from "../lib/helpers/requestFormatter";

const fetcher = (url, params = {}, headers = {}) => {
  return axios({
    url: url,
    ...setHeaders(null, headers),
    params: params,
    timeout: 1000,
  });
};

export default fetcher;

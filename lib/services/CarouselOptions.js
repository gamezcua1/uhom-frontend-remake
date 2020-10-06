import axios from "axios";

export const setItems = (images) =>
  images.map((image) => ({
    original: `${axios.defaults.baseURL}${image}`,
    thumbnail: `${axios.defaults.baseURL}${image}`,
  }));

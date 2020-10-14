import axios from "axios";

export const setItems = (images) =>
  images.map((image) => {
    const { image_url: imageUrl } = image;
    return {
      original: `${axios.defaults.baseURL}${imageUrl}`,
      thumbnail: `${axios.defaults.baseURL}${imageUrl}`,
    };
  });

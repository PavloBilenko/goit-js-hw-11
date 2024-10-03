import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/'; 

export const fetchPhotos = (searchedValue, page) => {
  const axiosOptions = {
    params: {
      key: '46327716-73f7a7ad818090b89dbb50822',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  };
  return axios.get('', axiosOptions);
};

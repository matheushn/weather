import axios from 'axios';

export const ApiCall = (link) =>
  axios.get(link)
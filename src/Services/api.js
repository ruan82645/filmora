import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?api_key=c634b4775a037a56f5dd2baf3951c4e8&language=pt-br

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;

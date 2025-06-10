import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/popular?api_key=a3c8bf910baa340ec19d2fc4d41ad8c7&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
  });

export default api;

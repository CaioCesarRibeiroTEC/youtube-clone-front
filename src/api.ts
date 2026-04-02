import axios from 'axios';

// 1. Instância para o teu Back-end (Node.js na porta 4000)
export const api = axios.create({
  baseURL: 'https://youtube-clone-back-3.onrender.com',
});

// Interceptor: Pega no token guardado e envia automaticamente como um "crachá"
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 2. Instância para a API oficial do YouTube
export const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        // Injeta a chave do teu .env automaticamente em todos os pedidos ao YouTube!
        key: import.meta.env.VITE_YOUTUBE_API_KEY, 
    }
});
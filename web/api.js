import axios from 'https://cdn.skypack.dev/axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:5500/pfe1-lojinha-carrrinho-2025/web",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem("token")}`
    }
});

export default api;
import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8000/backend_api",
    headers: {
        'Content-Type':'application/json',
        'Authorization': "Bearer " + JSON.parse(localStorage.getItem('jwt') ?? "{}").access
    }
})
import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://127.0.0.1:3000/api',
	// baseURL: 'https://qrca-backend-production.up.railway.app/api',
});

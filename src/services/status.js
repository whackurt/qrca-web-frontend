import { api } from './axios';

export const GetStatus = async () => {
	try {
		const res = await api.get('/status', {
			headers: { 'auth-token': localStorage.getItem('token') },
		});

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

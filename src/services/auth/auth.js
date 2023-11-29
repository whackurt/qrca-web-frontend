import { api } from '../api/axios';

export const UserLogin = async (creds) => {
	try {
		const res = await api.post('/auth/login', creds);
		return res;
	} catch (error) {
		return error;
	}
};

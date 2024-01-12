import { api } from './axios';

export const UserLogin = async (creds) => {
	try {
		const res = await api.post('/auth/login', creds);
		return res;
	} catch (error) {
		return error;
	}
};

export const UserSignup = async (creds) => {
	try {
		const res = await api.post('/auth/signup', creds);
		return res;
	} catch (error) {
		return error;
	}
};

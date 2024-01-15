import { api } from './axios';

export const GetAttendance = async () => {
	try {
		const res = await api.get('/attendance', {
			headers: { 'auth-token': localStorage.getItem('token') },
		});

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetAttendanceByDate = async (date) => {
	try {
		const res = await api.get('/attendance', date, {
			headers: { 'auth-token': localStorage.getItem('token') },
		});

		return res;
	} catch (error) {
		return { error: error.message };
	}
};

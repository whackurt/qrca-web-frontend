import { api } from './axios';

export const GetPersonnel = async () => {
	try {
		const res = await api.get('/personnel', {
			headers: { 'auth-token': localStorage.getItem('token') },
		});
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const GetPersonnelById = async (id) => {
	try {
		const res = await api.get(`/personnel/${id}`, {
			headers: { 'auth-token': localStorage.getItem('token') },
		});
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const CreatePersonnel = async (data) => {
	try {
		const res = await api.post(`/personnel`, data, {
			headers: { 'auth-token': localStorage.getItem('token') },
		});
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const UpdatePersonnelById = async (id, update) => {
	try {
		const res = await api.put(`/personnel/${id}`, update, {
			headers: { 'auth-token': localStorage.getItem('token') },
		});
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

export const DeletePersonnelById = async (id) => {
	try {
		const res = await api.delete(`/personnel/${id}`, {
			headers: { 'auth-token': localStorage.getItem('token') },
		});
		return res;
	} catch (error) {
		return { error: error.message };
	}
};

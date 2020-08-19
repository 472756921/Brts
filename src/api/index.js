import { get, post } from './request';

export function getUser() {
	return get('/api/user');
}
export function postUser(user) {
	return post('/api/user/info', user);
}

import { stringifyQuery } from '../../utils';

const request = async (options) => {
	let url = options?.url;
	const init = {
		headers: {
			Authorization: '',
			...options.config?.headers
		}
	};

	if (options.method === 'GET') {
		if (options.data) url += stringifyQuery(options.data);
	} else {
		init.method = options.method;
		init.headers['Content-Type'] = 'application/json';
		if (options.data) {
			init.body = JSON.stringify(options.data);
		}
	}
	const response = await fetch(url, init);
	if (response.status === 200) {
		return await response.json();
	} else {
		throw response;
	}
};

export function get(url, data, config) {
	return request({ url, data, config, method: 'GET' });
}

export function post(url, data, config) {
	return request({ url, data, config, method: 'POST' });
}

export function put(url, data, config) {
	return request({ url, data, config, method: 'PUT' });
}

export function patch(url, data, config) {
	return request({ url, data, config, method: 'PATCH' });
}

export function del(url, data, config) {
	return request({ url, data, config, method: 'DELETE' });
}

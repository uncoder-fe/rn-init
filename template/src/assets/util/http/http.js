/*
 * @Author: uncoder
 * @Date: 2018-01-29 16:11:07
 * @Last Modified by: uncoder
 * @Last Modified time: 2018-01-29 17:45:01
 */
import axios from 'axios';
// 根据自定义配置创建实例
const xhr = axios.create({
	baseURL: `/`,
	timeout: 30000,
	headers: {
		test: 123,
		'Content-Type': 'application/json',
	},
	responseType: 'json',
	withCredentials: false,
});
// request拦截
xhr.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	},
);
// response拦截
xhr.interceptors.response.use(
	function(response) {
		// Do something with response data
		return response;
	},
	function(error) {
		// Do something with response error
		return Promise.reject(error);
	},
);
// 获取token
const getToken = () => {
	return window.localStorage.getItem('token') || '';
};
// 发起请求
const request = config => {
	const res = xhr
		.request(config)
		.then(json => {
			return json.data;
		})
		.catch(error => {
			console.log(error);
		});
	return res;
};
export function get(url, params, headers) {
	const p = params || {};
	const h = headers || {};
	const config = {
		url,
		params: { ...p },
		headers: {
			token: getToken(),
			...h,
		},
	};
	request(config);
}
export function post(url, data, headers) {
	const p = data || {};
	const h = headers || {};
	const config = {
		url,
		data: { ...p },
		headers: {
			token: getToken(),
			...h,
		},
	};
	request(config);
}

const Http = { get, post };
export default Http;

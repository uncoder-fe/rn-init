/*
 * @Author: uncoder 
 * @Date: 2018-01-25 11:32:45 
 * @Last Modified by: uncoder
 * @Last Modified time: 2018-01-25 14:02:03
 */
import axios from 'axios';

class Http {
    constructor() {
        const token = getQueryString('token') || getHashString('token');
        const headers = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers.token = token;
        }
        this.xhr = axios.create({
            baseURL: `/`,
            timeout: 30000,
            headers
        });
    }
    post(opt) { }
    get(opt) { }
    delete(opt) { }
    put(opt) { }
}

export default new Http();


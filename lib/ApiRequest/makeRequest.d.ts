import { Method } from 'axios';
/**
 * @param {string} url
 * @param {Method} method
 * @param {string|null} token
 * @return {Promise<any>}
 */
export declare const makeRequest: <T>(url: string, method: Method, token: string | undefined) => Promise<T>;

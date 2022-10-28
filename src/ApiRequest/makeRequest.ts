import axios, { Method } from 'axios';
import * as Util from 'util';

/**
 * @param {string} url
 * @param {Method} method
 * @param {string|null} token
 * @return {Promise<any>}
 */
export const makeRequest = async <T>(url: string, method: Method, token: string | undefined): Promise<T> => {
  const headers = {
    authorization: Util.format(`Bot %s`, token),
  };

  return (await axios({ baseURL: 'https://discord.com/api/v10', url, method, headers })).data;
};

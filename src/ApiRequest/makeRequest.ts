import axios, { Method } from 'axios';

/**
 * @param {string} url
 * @param {Method} method
 * @param {string|null} token
 * @return {Promise<any>}
 */
export const makeRequest = async (url: string, method: Method, token?: string): Promise<any> => {
  const headers =
    token != null
      ? {
          authorization: `Bot ` + token,
        }
      : {};

  return await new Promise(
    async (resolve, reject) =>
      await axios({ baseURL: 'https://discord.com/api/v10', url, method, headers })
        .then((r) => resolve(r.data))
        .catch((e) => reject(e)),
  );
};

import { AbstractDiscordOptions } from './AbstractDiscordOptions';
import { Method } from 'axios';
import { makeRequest } from '../ApiRequest/makeRequest';
import TypeException from '../exception/TypeException';

export default abstract class AbstractDiscord {
  private readonly token: string;

  /**
   * @param {AbstractDiscordOptions} options
   */
  protected constructor(options: AbstractDiscordOptions) {
    if (typeof options.token !== 'string') throw new TypeException('string', typeof options.token, 'token');
    this.token = options.token;
  }

  /**
   * @param {string} url
   * @param {Method} method
   * @return {Promise<any>}
   */
  protected readonly makeRequest = async (url: string, method: Method): Promise<any> => {
    return await makeRequest(url, method, this.token);
  };
}

import { AbstractDiscordOptions } from './AbstractDiscordOptions';
import { Method } from 'axios';
import { makeRequest } from '../ApiRequest/makeRequest';
import TypeException from '../exception/TypeException';

export default abstract class AbstractDiscord<T> {
  protected readonly options: AbstractDiscordOptions;

  /**
   * @param {AbstractDiscordOptions} options
   */
  protected constructor(options: AbstractDiscordOptions) {
    if (typeof options.token !== 'string') throw new TypeException('string', typeof options.token, 'token');
    this.options = options;
  }

  /**
   * @param {string} url
   * @param {Method} method
   * @return {Promise<any>}
   */
  public readonly makeRequest = async (url: string, method: Method): Promise<T[]> => {
    return await makeRequest<T[]>(url, method, this.options.token);
  };
}

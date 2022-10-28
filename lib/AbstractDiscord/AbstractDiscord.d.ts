import { AbstractDiscordOptions } from './AbstractDiscordOptions';
import { Method } from 'axios';
export default abstract class AbstractDiscord<T> {
    protected readonly options: AbstractDiscordOptions;
    /**
     * @param {AbstractDiscordOptions} options
     */
    protected constructor(options: AbstractDiscordOptions);
    /**
     * @param {string} url
     * @param {Method} method
     * @return {Promise<any>}
     */
    readonly makeRequest: (url: string, method: Method) => Promise<T[]>;
}

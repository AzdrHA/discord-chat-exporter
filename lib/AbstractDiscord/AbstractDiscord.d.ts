import { AbstractDiscordOptions } from './AbstractDiscordOptions';
import { Method } from 'axios';
export default abstract class AbstractDiscord {
    private readonly token;
    /**
     * @param {AbstractDiscordOptions} options
     */
    protected constructor(options: AbstractDiscordOptions);
    /**
     * @param {string} url
     * @param {Method} method
     * @return {Promise<any>}
     */
    protected readonly makeRequest: (url: string, method: Method) => Promise<any>;
}

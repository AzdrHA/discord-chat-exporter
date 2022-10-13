import { Method } from 'axios';
export interface AbstractDiscordInterface {
    makeRequest: (url: string, method: Method) => Promise<any>;
}

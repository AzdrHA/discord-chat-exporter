import AbstractDiscord from '../AbstractDiscord/AbstractDiscord';
import { AbstractExportOptions } from './AbstractExportOptions';
export default abstract class AbstractExport<T> extends AbstractDiscord {
    abstract whitelistData: Array<keyof T>;
    abstract url(): string;
    protected readonly options: AbstractExportOptions<T>;
    protected constructor(options: AbstractExportOptions<T>);
    private readonly getWhiteListData;
    private readonly writeFile;
    private readonly getRequest;
    private readonly exportJson;
    private readonly exportCsv;
    /**
     * @template T
     * @param {T[]} object
     */
    private readonly serialize;
    /**
     * @template T
     * @param {T[]} object
     */
    private readonly serializeList;
}

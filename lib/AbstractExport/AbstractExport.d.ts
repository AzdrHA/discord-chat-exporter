import AbstractDiscord from '../AbstractDiscord/AbstractDiscord';
import { AbstractExportOptions } from './AbstractExportOptions';
export default abstract class AbstractExport<T> extends AbstractDiscord<T> {
    abstract whitelistAttrs: Array<keyof T>;
    abstract url(): string;
    protected readonly options: AbstractExportOptions<T>;
    protected constructor(options: AbstractExportOptions<T>);
    private readonly exportJson;
    private readonly normalizeList;
    private readonly normalize;
    private readonly getRequest;
    readonly getWhitelistAttrs: () => Array<keyof T>;
    private readonly writeFile;
}

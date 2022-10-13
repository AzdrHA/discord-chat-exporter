import AbstractExport from './AbstractExport/AbstractExport';
import { ExportMessageOptions } from './ExportMessageOptions';
import { Message } from './types/Message';
export default class ExportMessage extends AbstractExport<Message> {
    protected readonly options: ExportMessageOptions;
    whitelistData: Array<keyof Message>;
    protected constructor(options: ExportMessageOptions);
    url(): string;
}

import AbstractExport from './AbstractExport/AbstractExport';
import { ExportMessageOptions } from './ExportMessageOptions';
import { Message } from './types/Message';
export default class ExportMessage extends AbstractExport<Message> {
    whitelistAttrs: Array<keyof Message>;
    protected options: ExportMessageOptions;
    protected constructor(options: ExportMessageOptions);
    url(): string;
}

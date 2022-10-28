import { AbstractExportOptions } from './AbstractExport/AbstractExportOptions';
import { Message } from './types/Message';
export declare type ExportMessageOptions = {
    channel?: string;
} & AbstractExportOptions<Message>;

import { AbstractExportOptions } from './AbstractExport/AbstractExportOptions';
import { Message } from './types/Message';

export type ExportMessageOptions = {
  channel: string;
} & AbstractExportOptions<Message>;

import AbstractExport from './AbstractExport/AbstractExport';
import { ExportMessageOptions } from './ExportMessageOptions';
import * as Util from 'util';
import { Message } from './types/Message';
import TypeException from './exception/TypeException';

export default class ExportMessage extends AbstractExport<Message> {
  protected readonly options: ExportMessageOptions;
  public whitelistData: Array<keyof Message> = ['id'];

  protected constructor(options: ExportMessageOptions) {
    super(options);
    if (typeof options.channel !== 'string') throw new TypeException('string', typeof options.channel, 'channel');
    this.options = options;
  }

  public url(): string {
    return Util.format('/channels/%s/messages', this.options.channel);
  }
}

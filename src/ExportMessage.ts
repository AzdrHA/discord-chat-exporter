import AbstractExport from './AbstractExport/AbstractExport';
import { ExportMessageOptions } from './ExportMessageOptions';
import { Message } from './types/Message';
import TypeException from './exception/TypeException';
import * as Util from 'util';

export default class ExportMessage extends AbstractExport<Message> {
  public whitelistAttrs: Array<keyof Message> = ['id'];
  protected options: ExportMessageOptions;
  protected constructor(options: ExportMessageOptions) {
    super(options);
    if (typeof options.channel !== 'string') throw new TypeException('string', typeof options.channel, 'channel');
    this.options = options;
  }

  public url(): string {
    return Util.format('/channels/%s/messages', this.options.channel);
  }
}

import AbstractDiscord from '../AbstractDiscord/AbstractDiscord';
import { AbstractExportOptions, fileExtension } from './AbstractExportOptions';
import UtilsFileSystem from '../utils/UtilsFileSystem';
import path from 'path';
import TypeException from '../exception/TypeException';
import * as Util from 'util';
import UtilSerialize from '../utils/UtilSerialize';

export default abstract class AbstractExport<T> extends AbstractDiscord {
  public abstract whitelistData: Array<keyof T>;
  public abstract url(): string;
  protected readonly options: AbstractExportOptions<T>;

  protected constructor(options: AbstractExportOptions<T>) {
    super(options);

    if (!fileExtension.includes(options.format))
      throw new TypeException(fileExtension.join(', '), options.format, 'format');

    if (!Array.isArray(options.whiteList)) throw new TypeException('array', typeof options.whiteList, 'whiteList');

    this.options = options;

    switch (options.format) {
      case 'json':
        void this.exportJson();
        break;
      case 'csv':
        void this.exportCsv();
        break;
    }
  }

  private readonly getWhiteListData = (): Array<keyof T> =>
    this.options.whiteList != null ? (this.whitelistData = this.options.whiteList) : this.whitelistData;

  private readonly writeFile = (data: any): void => {
    UtilsFileSystem.writeFile(
      data,
      path.join(this.options.output ?? process.cwd(), this.options.fileName ?? Util.format('export_%s', Date.now())),
      this.options.format,
    );
  };

  private readonly getRequest = async (): Promise<T[]> => (await this.makeRequest(this.url(), 'GET')).reverse();

  private readonly exportJson = async (): Promise<void> => {
    if (this.url() == null) throw new Error('fgiojgisdjgisdjio');
    this.writeFile(JSON.stringify(await this.getRequest()));
  };

  private readonly exportCsv = async (): Promise<void> => {
    const data = this.serializeList(await this.getRequest()) as Array<Record<string, any>>;
    const res = [this.getWhiteListData().join(';')];
    data.forEach((obj) => {
      res.push(Object.values(obj).join(';'));
    });
    this.writeFile(res.join('\n'));
  };

  /**
   * @template T
   * @param {T[]} object
   */
  private readonly serialize = (object: T): Record<string, any> => {
    return UtilSerialize.normalize(object as Record<string, any>, this.getWhiteListData() as string[]);
  };

  /**
   * @template T
   * @param {T[]} object
   */
  private readonly serializeList = (object: T[]): Record<string, any> => {
    return UtilSerialize.normalizeList(object as Array<Record<string, any>>, this.getWhiteListData() as string[]);
  };
}

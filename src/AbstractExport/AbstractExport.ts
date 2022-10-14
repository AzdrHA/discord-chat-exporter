import AbstractDiscord from '../AbstractDiscord/AbstractDiscord';
import { AbstractExportOptions, fileExtension } from './AbstractExportOptions';
import TypeException from '../exception/TypeException';
import { writeFile } from '../utils/UtilFileSystem';
import path from 'path';
import * as Util from 'util';

export default abstract class AbstractExport<T> extends AbstractDiscord<T> {
  public abstract whitelistAttrs: Array<keyof T>;
  public abstract url(): string | undefined;
  protected readonly options: AbstractExportOptions<T>;

  protected constructor(options: AbstractExportOptions<T>) {
    super(options);

    if (!fileExtension.includes(options.format))
      throw new TypeException(fileExtension.join(', '), options.format, 'format');
    if (!Array.isArray(options.whitelistAttrs))
      throw new TypeException('array', typeof options.whitelistAttrs, 'whiteList');

    this.options = options;
    void this.exportJson();
  }

  private readonly exportJson = async (): Promise<void> => {
    console.log(this.url());
    // this.normalizeList(await this.getRequest(), this.whitelistAttrs);
    // this.writeFile(JSON.stringify(await this.getRequest()));
  };

  /* private readonly normalizeList = (list: T[], whitelistAttrs: Array<keyof T>): Array<Partial<T>> => {
    const res: Array<Partial<T>> = [];
    list.forEach((obj) => {
      return res.push(this.normalize(obj, whitelistAttrs));
    });
    return res;
  }; */

  /* private readonly normalize = (object: T, whitelistAttrs: Array<keyof T>): Partial<T> => {
    const res: Partial<T> = {};
    whitelistAttrs.map((s) => {
      console.log(s);
      return s
        .toString()
        .replace(/\[([^[\]]*)]/g, '.$1.')
        .split('.')
        .filter((t) => t !== '')
        .reduce((prev, cur) => (prev[cur] !== undefined ? prev[cur] : 'N/A'), object);
    });
    return res;
  }; */

  private readonly getRequest = async (): Promise<T[]> => {
    return (await this.makeRequest(this.url, 'GET')).reverse();
  };

  public readonly getWhitelistAttrs = (): Array<keyof T> =>
    this.options.whitelistAttrs != null ? (this.whitelistAttrs = this.options.whitelistAttrs) : this.whitelistAttrs;

  private readonly writeFile = (data: string | NodeJS.ArrayBufferView): void =>
    writeFile(
      data,
      path.join(this.options.output ?? process.cwd(), this.options.fileName ?? Util.format('export_%s', Date.now())),
      this.options.format,
    );
  /*



  private readonly exportCsv = async (): Promise<void> => {
    const data = this.serializeList(await this.getRequest());
    const res = [this.getWhiteListData().join(';')];
    data.forEach((obj) => {
      res.push(Object.values(obj).join(';'));
    });
    this.writeFile(res.join('\n'));
  };

  /!**
   * @template T
   * @param {T[]} object
   *!/
  private readonly serializeList = (object: ArrayObjectBlaBla): ArrayObjectBlaBla => {
    return this.normalizeList(object, this.getWhiteListData());
  };



  */
}

import * as fs from 'fs';
import * as Util from 'util';
import { FileExtension } from '../AbstractExport/AbstractExportOptions';
import { PathOrFileDescriptor } from 'fs';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default abstract class UtilsFileSystem {
  /**
   * @param {string | NodeJS.ArrayBufferView} data
   * @param {PathOrFileDescriptor} path
   * @param {FileExtension} extension
   * @return {void}
   */
  public static writeFile = (
    data: string | NodeJS.ArrayBufferView,
    path: PathOrFileDescriptor,
    extension: FileExtension,
  ): void => {
    fs.writeFile(Util.format('%s.%s', path, extension), data, (err) => {
      if (err != null) throw err;
    });
  };
}

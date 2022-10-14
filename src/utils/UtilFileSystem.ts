import * as fs from 'fs';
import * as Util from 'util';

/**
 * @param {string | NodeJS.ArrayBufferView} data
 * @param {string} path
 * @param {string} extension
 * @return {void}
 */
export const writeFile = (data: string | NodeJS.ArrayBufferView, path: string, extension: string): void => {
  fs.writeFile(Util.format('%s.%s', path, extension), data, (err) => {
    if (err == null) throw err;
  });
};

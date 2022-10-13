/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { FileExtension } from '../AbstractExport/AbstractExportOptions';
import { PathOrFileDescriptor } from 'fs';
export default abstract class UtilsFileSystem {
    /**
     * @param {string | NodeJS.ArrayBufferView} data
     * @param {PathOrFileDescriptor} path
     * @param {FileExtension} extension
     * @return {void}
     */
    static writeFile: (data: string | NodeJS.ArrayBufferView, path: PathOrFileDescriptor, extension: FileExtension) => void;
}

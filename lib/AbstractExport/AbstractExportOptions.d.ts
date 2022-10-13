import { AbstractDiscordOptions } from '../AbstractDiscord/AbstractDiscordOptions';
export declare const fileExtension: FileExtension[];
export declare type FileExtension = 'json' | 'csv' | 'html';
export declare type AbstractExportOptions<T> = {
    output?: string;
    fileName?: string;
    format: FileExtension;
    whiteList?: Array<keyof T>;
} & AbstractDiscordOptions;

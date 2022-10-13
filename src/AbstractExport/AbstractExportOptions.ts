import { AbstractDiscordOptions } from '../AbstractDiscord/AbstractDiscordOptions';

export const fileExtension: FileExtension[] = ['json', 'csv', 'html'];
export type FileExtension = 'json' | 'csv' | 'html';
export type AbstractExportOptions<T> = {
  output?: string;
  fileName?: string;
  format: FileExtension;
  whiteList?: Array<keyof T>;
} & AbstractDiscordOptions;

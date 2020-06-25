import { promisify } from 'util';
import { readdir as _readdir, readFile as _readFile, stat } from 'fs';

export const fsStat = promisify(stat);
export const readdir = promisify(_readdir);
export const readFile = promisify(_readFile);
import { readFile } from '../utils';

export function fileTraverse(file): Promise<any> {
  return readFile(file);
}


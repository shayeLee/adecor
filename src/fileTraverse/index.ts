import { readdir, readFile, fsStat } from '../utils';

export async function fileTraverse(targetDir): Promise<any> {
  let result;
  
  const stat = await fsStat(targetDir);
  const isDirectory = stat.isDirectory();
  if (isDirectory) {
    result = await readdir(targetDir).catch(err => {
      console.error(err)
    });
  } else {
    result = await readFile(targetDir).catch(err => {
      console.error(err)
    });
    result = result.toString();
  }

  return result;
}


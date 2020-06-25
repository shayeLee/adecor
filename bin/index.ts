#! /usr/bin/env ts-node

import { resolve as pathResolve } from 'path';
import * as program from 'commander';
import { fileTraverse } from '../src';

const excuteDir = process.cwd();

import(pathResolve(__dirname, '../package.json')).then(async pkg => {
  program
    .version(pkg.version, '-v, --version')
    .parse(process.argv);

  const [ path ] = program.args;
  const targetDir = pathResolve(excuteDir, path);
  
  const result = await fileTraverse(targetDir);
  console.log('result =>', result);
});

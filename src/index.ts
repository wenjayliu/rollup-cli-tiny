#!/usr/bin/env node
// import fse from 'fs-extra'
import init from './init'
import pack from './pack'
import message from './utils/message' // 终端字符串样式
import pkg  from '../package.json'
import { outputGitignore } from "./utils/writeComFile";
const cwd = process.cwd();
const [, , ...args] = process.argv;
const [type, name] = args;

switch (type) {
    case 'init': {
        init(cwd);
        break;
    }
    case 'pack': {
      pack(cwd, name);
        break;
    }

    case '-v': {
      message.success(`version ${pkg.version}`);
      break;
    }
    default: {
        console.log(`you can use:\nrc-cli2 create \nrc-cli2 init \nrc-cli2 -v`);
        break;
    }
}

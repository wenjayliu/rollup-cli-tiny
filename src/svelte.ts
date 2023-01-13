import fse from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url';
import { outputGitignore, outputLICENSE } from "./utils/writeComFile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (cwd: any, name: string) => {
  // console.log('hello cli', cwd)
  // const data = fse.readFileSync(file, 'utf8')
  // console.log('data', data)
  console.log('__dirname : ' + __dirname) // C:\Users\admin\AppData\Roaming\npm\node_modules\rollup-cli-tiny\bin
  // const target = path.resolve(cwd, name);
  const tpl = `${__dirname}/template/svelte`
  // fse.mkdirSync(target);
  
  fse.copy(tpl, `./${name}`)
  .then(() => {

    outputGitignore(name)
    outputLICENSE(name)
    console.log('success!')
  }
  )
}




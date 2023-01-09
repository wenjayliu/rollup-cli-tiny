import chalk from 'chalk'

const log = console.log

export default {
  success: (msg: string) => log(chalk.green(`${msg}`)),
  error: (msg: string) => log(chalk.red.bold.bgWhite(`${msg}`)),
  info: (msg: string) => log(chalk.yellow(`${msg}`)),
  blue: (msg: string) => log(chalk.blue(`${msg}`)),
  tips: (msg: string) => log(chalk.blackBright(`${msg}`)),
}

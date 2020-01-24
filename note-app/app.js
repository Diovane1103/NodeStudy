const operations = require('./utils.js')
const chalk = require('chalk')  

//console.log(chalk.green.bold.inverse(add(5, 10)))
//console.log(chalk.green.inverse.bold(add(5, 10) + ' ' + chalk.blue.inverse.bold(add(50, 15) + ' ') + add(12, 7)))

console.log(chalk.blue.bold.inverse(operations.add(5, 6)))
console.log(chalk.magenta.bold.inverse(operations.sub(10, 6)))
console.log(chalk.green.bold.inverse(operations.mul(5, 6)))
console.log(chalk.yellow.bold.inverse(operations.div(36, 6)))
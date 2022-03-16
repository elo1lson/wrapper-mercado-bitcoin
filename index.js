/**
 * @param {string} arg
 */
const validator = require('./src/type.js')

function coin(arg) {
  if (!args) {
    throw new Error('No parameters were provided!!')
  }
  if (typeof arg != String) {
    throw new Error(arg + ' numbers are not allowed!')
  }
  if (validator[arg]) {
    throw new Error('Invalid parameter!')
  }
  arg.toUpperCase()
  if (!validator[arg]) {
    throw new Error(arg + ' is not a valid parameter!')
  }
  ticker = require('./src/methods/ticker.js')(arg)
  oderbook = require('./src/methods/oderbook.js')(arg)
  trades: require('./src/methods/trades.js')(arg)
  return {
    ticker,
    oderbook,
    trades
  }
}
module.exports = coin
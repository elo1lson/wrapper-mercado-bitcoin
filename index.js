/**
 * @param {string} arg
 */
const validator = require('./src/type.js')

function coin(arg) {
  if (!validator.includes(arg)) {
    throw new Error(arg + ' is not a valid param!')
  }

  ticker = require('./src/methods/ticker.js')(arg)
  oderbook = require('./src/methods/oderbook.js')(arg)
  trades = require('./src/methods/trades.js')(arg)
  return {
    ticker,
    oderbook,
    trades
  }
} 
module.exports = coin

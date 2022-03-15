const axios = require('axios')
const api = require('./src/api.js')

/**
 * @param {string} cripto
 * @param {}  description
 */
class getCoin{
  constructor(coin) {
    this.coin = coin
  }
  ticker = require('./src/methods/ticker.js')
}
module.exports = getCoin

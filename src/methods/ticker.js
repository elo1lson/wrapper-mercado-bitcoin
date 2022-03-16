const axios = require('axios')

module.exports = async (name) => {
  var res = await axios
    .get(`https://www.mercadobitcoin.net/api/${name}/ticker`)
    .then(r => r.data.ticker)
    .catch(e => console.log('Erro ' + e))
  var ticker = new Object()
  ticker.high = res.high
  ticker.low = res.low
  ticker.vol = res.vol
  ticker.last = res.last
  ticker.buy = res.buy
  ticker.sell = res.sell
  ticker.decimal = function(key) {
  }
  return ticker

}
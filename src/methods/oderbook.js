const axios = require('axios')

module.exports = async (name) => {
  var res = axios
    .get(`https://www.mercadobitcoin.net/api/${name}/oderbook`).then(r => r.data)
    .catch(e => console.log(e))
  var oderbook = new Object()
  oderbook.bids = res.bids
  oderbook.low = res.asks
  return oderbook
}

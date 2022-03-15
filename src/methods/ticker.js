const axios = require('axios')

module.exports = async (name) => {
  var res = axios
    .get(`https://www.mercadobitcoin.net/api/${name}/ticker`).then(r => r.data)
  return res

}

const axios = require('axios')

module.exports = async (name) => {
  var res = await axios
    .get(`https://www.mercadobitcoin.net/api/${name}/trades`)
    .then(r => r.data)
    .catch(e => console.log(e))

  var trades = new Object()
  trades = res
  return trades

}

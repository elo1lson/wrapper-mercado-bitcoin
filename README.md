## About
A library developed from the bitcoin marketplace api! 
With it you can check values ​​of cryptos, tokens and ntfs

## Usage
```js
const cripto = require('mercadobitcoin.js')

async callCripto(){
  var getcripto = cripto("BTC").ticker
  console.log(getcripto)
}
callCripto
```

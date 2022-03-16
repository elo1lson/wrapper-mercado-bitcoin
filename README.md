## About
A library developed from the bitcoin marketplace api! 
With it you can check values ​​of cryptos, tokens and ntfs

## Usage
```js
const cripto = require('mercadobitcoin.js')

async callCripto(){

  var getcripto = await cripto("BTC").ticker
  // Methods:
  // ticker
  // oderbook
  //trades
  console.log(getcripto)
}
callCripto
```
Example of return: 
```js
{
  high: '213000.00000000',
  low: '199800.00000000',
  vol: '110.95987655',
  last: '208286.00104000',
  buy: '208286.00104',
  sell: '208830.99881',
  decimal: [Function]
}
```

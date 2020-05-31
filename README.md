# friedrich-mini-split-remote
Infrared codes for Friedrich mini-split ductless heating &amp; cooling wall units

## Example usage
```js
var broadlink = require('broadlinkjs')
var friedrich = require('friedrich-mini-split-remote')
new broadlink().on("deviceReady", device => {
    device.sendData(friedrich.getBuffer('cool', 'auto', 68))
})
```
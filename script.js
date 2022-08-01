let ethws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade")

let btcws = new WebSocket("wss://stream.binance.com:9443/ws/btceur@trade")

let xmrws = new WebSocket("wss://stream.binance.com:9443/ws/xmrusdt@trade")

let stockPriceElementEth = document.getElementById("stock-price-eth")
let stockPriceElementBtc = document.getElementById("stock-price-btc")
let stockPriceElementXmr = document.getElementById("stock-price-xmr")

// 88a0450c-46fe-49d9-9c0e-c38f48e65535

xmrws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data)

  stockPriceElementXmr.innerText = parseFloat(stockObject.p).toFixed(2)
  // console.log(event)
}

// handle new message
ethws.onmessage = (event) => {
  // convert data stream into js object
  let stockObject = JSON.parse(event.data)

  stockPriceElementEth.innerText = parseFloat(stockObject.p).toFixed(2)
  // console.log(stockObject.p)
}

btcws.onmessage = (event) => {
  // convert data stream into js object
  let stockObject = JSON.parse(event.data)

  stockPriceElementBtc.innerText = parseFloat(stockObject.p).toFixed(2)
  // console.log(stockObject)
}

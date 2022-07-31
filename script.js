let ethws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade")

let btcws = new WebSocket("wss://stream.binance.com:9443/ws/btceur@trade")

let stockPriceElementEth = document.getElementById("stock-price-eth")
let stockPriceElementBtc = document.getElementById("stock-price-btc")

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
  // console.log(stockObject.p)
}

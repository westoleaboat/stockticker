let ethws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade")

let btcws = new WebSocket("wss://stream.binance.com:9443/ws/btceur@trade")

let xmrws = new WebSocket("wss://stream.binance.com:9443/ws/xmrusdt@trade")

let stockPriceElementEth = document.getElementById("stock-price-eth")
let stockPriceElementBtc = document.getElementById("stock-price-btc")
let stockPriceElementXmr = document.getElementById("stock-price-xmr")

const formatterEUR = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
})

const formatterUSDT = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
})

xmrws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data)

  stockPriceElementXmr.innerText = formatterUSDT.format(stockObject.p)
}

// handle new message
ethws.onmessage = (event) => {
  // convert data stream into js object
  let stockObject = JSON.parse(event.data)

  stockPriceElementEth.innerText = formatterEUR.format(stockObject.p)
}

btcws.onmessage = (event) => {
  // convert data stream into js object
  let stockObject = JSON.parse(event.data)

  stockPriceElementBtc.innerText = formatterEUR.format(stockObject.p)
}

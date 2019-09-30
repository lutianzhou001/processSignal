const Fcoin = require('fcoin-api');

let fcoin = new Fcoin({
    key: 'fb7dcf9d53b74ec9b4b3cbc8de245206',
    secret: '43f3d15c2b404a1ea69c5495ced0d231' ,
    proxy: '' // 为空则不开启
})

async function getDepthBid() {
    var depth = await fcoin.getDepth('L20', 'xrpusdt').then(data => { return data.data.bids })
    return depth
}

async function getDepthAsk() {
    var depth = await fcoin.getDepth('L20', 'xrpusdt').then(data => { return data.data.asks })
    return depth
}

async function placeOrderBuy(depth, amount) {
    return fcoin.createOrder('xrpusdt', 'buy', 'limit', depth, amount, 'main').then(
            data => {
                return data.data
            })
}

async function placeOrderSell(depth, amount) {
    return fcoin.createOrder('xrpusdt', 'sell', 'limit', depth, amount, 'main').then(
        data => {
                return data.data
        })
}

async function getBalance(n) {
    return await fcoin.getBalance().then(data => { return data.data[n].available })
}

async function buy() {
        // first to query lasttime order
    var resbuy = await getDepthBid()
    var ressell = await getDepthAsk()
    var amount = await getBalance(5)
    await placeOrderBuy(ressell[0], (amount / ressell[0] - 2).toFixed(2) )
}

async function sell() {
        // first to query lasttime order
    var resbuy = await getDepthBid()
    var ressell = await getDepthAsk()
    var amount = await getBalance(12)
    await placeOrderSell(resbuy[0], (amount - 2).toFixed(2) )
}

module.expose = {
buy,
sell
}

var express = require('express')
var app = express()
var http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const model = require('./stradegy/rsi')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

model.init()
model.check(true)

app.post('/api/submitData', async function(req,res){
    console.log(req.body.huobipro['XRP/USDT'].indicators.rsi[1])
})

http.createServer(app).listen(3000, function () {
    console.log("server start");
});




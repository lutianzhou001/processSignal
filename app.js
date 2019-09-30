var express = require('express')
var app = express()
var http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/api/submitData', async function(req,res){
    console.log(req.body.huobipro['XRP/USDT'].indicators.rsi[1])
    model.stradegy(...)
})

http.createServer(app).listen(3000, function () {
    console.log("server start");
});




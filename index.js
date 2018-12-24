var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use('/users', proxy({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/AccessTokens', proxy({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/courses', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.listen(4000)

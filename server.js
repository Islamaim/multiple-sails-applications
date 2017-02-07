var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var app1 = 'http://localhost:3001/',
    app2 = 'http://localhost:3002/'
 
app.all("/app1/*", function(req, res) {
    proxy.web(req, res, {target: app1});
});

app.all("/app2/*", function(req, res) {
    proxy.web(req, res, {target: app2});
});

app.listen(3000);
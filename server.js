var express = require('express');
var request = require('request');
var path = require('path');

var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddlware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.config.prod');
var compiler = webpack(config);

var app = express();
var port = 3000;


app.use(express.static(__dirname + '/build'));

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    hot: true,
    quite: false,
    stats: {colors: true}
}));

app.use(WebpackHotMiddlware(compiler, {
    log: console.log
}))

app.use('/api', function(req, res) {
    var url = "http://anshulmalik.me/api/"+ req.url;
    console.log("requesting : " + url);
    req.pipe(request(url)).pipe(res);
});

app.get('*', function response(req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log("Server listening on ", port);
});

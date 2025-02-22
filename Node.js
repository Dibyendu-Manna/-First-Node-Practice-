var http = require('http');
var dt = require('./date.js');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('Website.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("Error loading demo.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("Page not found");
    }
    if (req.url === '/about') {
        fs.readFile('about.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("Error loading demo.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("Page not found");
    }
    if (req.url === '/contact') {
        fs.readFile('contact.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("Error loading demo.html");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("Page not found");
    }

}).listen(8000);

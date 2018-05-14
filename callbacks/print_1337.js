var https = require('https');

var getHTML = require('./http-functions');

function printHTML(html) {
  console.log(html.replace(/[a]/g, '4')
    .replace(/[e]/g, '3')
    .replace(/[l]/g, '1')
    .replace(/[o]/g, '0')
    .replace(/[s]/g, '5')
    .replace(/[t]/g, '7')
    .replace(/['ck']/g, 'x')
    .replace(/['er']/g, '0r')
    .replace(/['you']/g, 'j00')
  );
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);
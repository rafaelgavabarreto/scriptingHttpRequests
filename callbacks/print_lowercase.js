var https = require('https');

var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions,printHTML);
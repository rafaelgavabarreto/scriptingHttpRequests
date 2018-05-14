var https = require('https');

var getHTML = require('./makeItModule');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions,printHTML);
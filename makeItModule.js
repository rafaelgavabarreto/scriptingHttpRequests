module.exports = function getHTML(options, callback) {

  var bufferedStrings = '';

  var https = require('https');

  https.get(options, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {
      bufferedStrings += data;
    });
    response.on('error', function(error) {
      bufferedStrings += error;
    });
    response.on('end', function(end) {
      bufferedStrings += end;
      callback(bufferedStrings);
    });
    response.on('finish', function(finish) {
      bufferedStrings += finish;
    });
  });
}
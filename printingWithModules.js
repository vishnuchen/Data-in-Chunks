
var Helper = require('./http-function'); 

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};

function printHTML (html) {
    console.log(html);
  }

Helper.getHTML(requestOptions, printHTML)
var Helper = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

Helper.getHTML(requestOptions, printReverse);
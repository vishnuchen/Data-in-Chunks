var Helper = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

Helper.getHTML(requestOptions, printUpperCase);
var Helper = require('./http-function');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

Helper.getHTML(requestOptions, printLowerCase);
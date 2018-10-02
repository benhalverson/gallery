const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  request(
    'https://www.loopcommerce.com/about/#investors',
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(response);
        $('image-wrap').each(function(i, element) {
          console.log('element', element.name);
          const listItem = $(this).next();
          console.log('listItem', listItem);
          // var a = $(this).prev();
          // console.log(a.text());
        });
      }
    }
    // save to an array of objects.
  );
  res.send({body});
});
const port = 3000;
app.listen(port);

console.log('server started on port: ' + port);
// [
//   {'img': 'url'}
// ]

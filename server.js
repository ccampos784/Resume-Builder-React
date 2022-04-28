const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require("ejs");
const pdf = require("html-pdf");

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/generatePDF', (req, res) => {

  const options = {
    "height": "11.25in",
    "width": "8.5in",
    "border": {
      "top": "0.25in",            // default is 0, units: mm, cm, in, px
      "right": "0.25in",
      "bottom": "0.25in",
      "left": "0.25in"
    }    
  };  

  ejs.renderFile("report-template.ejs", {body : req.body}, {}, (err, str) => {

    if (err) {
      res.send(err);
      return res.sendStatus(500);

    } else {
      pdf.create(str, options).toStream((err, pdfStream) => {
        if (err) {
          res.send(err);
          return res.sendStatus(500);
    
        } else {
          res.statusCode = 200 
    
          pdfStream.on('end', () => {
            return res.end()
          })
    
          pdfStream.pipe(res)
        }
      });
    }

  })


});

app.listen(port, () => console.log(`Listening on port ${port}`));
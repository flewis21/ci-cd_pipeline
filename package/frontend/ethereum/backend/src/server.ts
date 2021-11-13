import dotenv from 'dotenv';
import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
const css = process.env.CSS_1;
const script = process.env.SCRIPT_2;

app.set('public_html', path.resolve(__dirname, '../../../public/'));
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');

// One main middleware for / using express.static and res.render.
app.use('/1972/09/11', [
  // Use express.static first to look for a static resource.
  express.static(app.get('public_html')),

  // If not found render main index, but only for / else next.
  // express.static('public_html'),
  function (req: any, res: any, next: any) {
    if (req.url === '/') {
      express.static('public_html'),
        res.status(200).render('index', {
          title: process.env.TITLE,
          editor: process.env.EDITOR,
          short_description: process.env.SHORT_DESCRIPTION,
          sipoc_form: process.env.SIPOC_1,
          sipoc_slide: process.env.SIPOC_2,
          myScript: process.env.SCRIPT_1,
          myCss: process.env.CSS_1,
          css_type: process.env.CSS_TYPE_1,
          script_type: process.env.SCRIPT_TYPE_2,
          exports_object: 'let exports = {}',
        });
    }
  },
]);

app.get('*', function (req, res) {
  res.status(404).render('error', {});
});

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});

module.exports.handler = serverless(app);

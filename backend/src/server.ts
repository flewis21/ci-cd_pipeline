import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;

app.set('public_html', path.resolve(__dirname, '../../frontend/public/'));
app.set('views', path.resolve(__dirname, '../../frontend/views/pages/'));
app.set('view engine', 'ejs');

// One main middleware for / using express.static and res.render.
app.use('/', [
  // Use express.static first to look for a static resource.
  express.static(app.get('public_html')),

  // If not found render main index, but only for / else next.
  // express.static('public_html'),
  function (req: any, res: any, next: any) {
    if (req.url === '/') {
      express.static('public_html'),
        res.status(200).render('_index', {
          title: 'My Family Tree - Part I',
          author: 'Pro Bono Volunteer Agency',
          short_description: 'Pro Bono Volunteer Agency',
          sipoc_form:
            'https://docs.google.com/forms/d/e/1FAIpQLSf7eQty92OWCEw_YZ4Irf-PpjYboaKysgVLIBnxESn-TcRfnQ/viewform?embedded=true',
          sipoc_slide:
            'https://docs.google.com/presentation/d/e/2PACX-1vSq6HBWVkXDbQatjrtodxKlGSDJkrj0Uc70jRN6vhzDmvW3RPjysRGhnjCyGZ77vaKLl0IVqB3UDQO3/embed?start=false&loop=false&delayms=60000',
          myScript: 'output/index.js',
          myCss: 'css/style.css',
          css_type: 'text/css',
          script_type: 'module',
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

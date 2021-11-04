import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
const app = express();
const port = process.env.PORT ?? 4000;
const baseUrl = `http://localhost:${port}`;

app.set('public_html', path.resolve(__dirname, '../../frontend/public/'));
app.set('views', path.resolve(__dirname, '../../frontend/views/pages/'));
app.set('view engine', 'ejs');

// One main middleware for / using express.static and res.render.
app.use('/1972/09/11', [
  // Use express.static first to look for a static resource.
  express.static(app.get('public_html')),

  // If not found render main index, but only for / else next.
  express.static('public_html'),
  function (req: any, res: any, next: any) {
    if (req.url === '/') {
      res.status(200).render('index', {
        title: 'My Family Tree - Part I',
        short_description: 'Pro Bono Volunteer Agency',
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

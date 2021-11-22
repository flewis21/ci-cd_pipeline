import dotenv from 'dotenv';
import express from 'express';
import router from './routes';
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
        res.status(200).render(process.env.WEBSITE_1 || 'index', {
          title: '',
          s_type_1: '',
          script_1: '',
          c_type_1: '',
          css_1: '',
          desc_1: '',
          author_1: '',
          keywords_1: '',
        });
    }
  },
]);

router.get('*', function (req, res, next) {
    res.redirect(404).render(process.env.WEBSITE_4 || 'first', {
      title: 'BLOG!',
      s_type_1: '??',
      script_1: '??',
      c_type_1: 'text/css',
      css_1: '1972/09/11/css/style.css',
      desc_1: 'Error',
      author_1: 'Page',
      keywords_1: 'error',
    });
  });
  
  app.get('*', function (req, res) {
  res.status(404).render(process.env.WEBSITE_3 || 'error', {
    title: '404!',
    s_type_1: '??',
    script_1: '??',
    c_type_1: 'text/css',
    css_1: '1972/09/11/css/style.css',
    desc_1: 'Error',
    author_1: 'Page',
    keywords_1: 'error',
  });
});

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});

module.exports.handler = serverless(app);

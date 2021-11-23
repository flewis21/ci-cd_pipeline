import dotenv from 'dotenv';
import createError from 'http-errors';
import express from 'express';
import router from './routes';
import serverless from 'serverless-http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routesIndex';
import usersRouter from './routesUsers';
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
const css = process.env.CSS_1;
const script = process.env.SCRIPT_2;

app.set('public_html', path.resolve(__dirname, '../../../public/'));
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');

// Add middleware libraries.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// One main middleware for / using express.static and res.render.
app.use('/1', indexRouter);
app.use('/users', usersRouter);
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

// Catch 404  and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// Error handling
app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // Render the error page
    // app.get('*', function (req, res) {
    res.status(err.status || 500).render(process.env.WEBSITE_3 || 'error', {
        title: '404!',
        s_type_1: '??',
        script_1: '??',
        c_type_1: 'text/css',
        css_1: '1972/09/11/css/style.css',
        desc_1: 'Error',
        author_1: 'Page',
        keywords_1: 'error',
    });
    // });
});

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});

module.exports.handler = serverless(app);

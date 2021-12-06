import dotenv from 'dotenv';
// @ts-ignore
import createError from 'http-errors';
import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import blogsRouter from './routesBlogs';
import indexRouter from './routesIndex';
import usersRouter from './routesUsers';
import {URL} from 'url';
import {ClientRequest, request} from 'http';
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;

app.set('public_html', path.resolve(__dirname, '../../../public/'));
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');

// Add middleware libraries.
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// using the JSON body parser
app.use(require('body-parser').json());

// One main middleware for / using express.static and res.render.
app.use(
  '/',
  // Use express.static first to look for a static resource.
  express.static(app.get('public_html'))
);

app.get('/', function (req: any, res: any, next: any) {
  if (req.url === '/') {
    switch (indexRouter) {
      case indexRouter:
        app.get('/', indexRouter);
    }
    //    app.get('/', function (req: any, res: any, next: any) {
    //      case request('/')
    // Random
    //            app.get('/', indexRouter)
  }
});

app.get('/BLOG', function (req: any, res: any, next: any) {
  if (req.url === '/BLOG') {
    // Blogging
    app.use('/', blogsRouter);
  }
});

app.get('/USERS', function (req: any, res: any, next: any) {
  if (req.url === '/USERS') {
    // User directory
    app.use('/', usersRouter);
  }
});

// Catch 404  and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(createError(404));
});

// Error handling
app.use(function (err: any, req: any, res: any, next: any) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render(process.env.WEBSITE_3 || 'error', {
    title: 'ERROR 404',
    s_type_1: '',
    script_1: '',
    c_type_1: 'text/css',
    css_1: 'css/style.css',
    desc_1: '',
    author_1: '',
    keywords_1: '',
  });
});

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});

module.exports.handler = serverless(app);

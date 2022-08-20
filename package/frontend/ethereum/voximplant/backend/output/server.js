'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const dotenv_1 = (0, tslib_1.__importDefault)(require('dotenv'));
// @ts-ignore
const http_errors_1 = (0, tslib_1.__importDefault)(require('http-errors'));
const express_1 = (0, tslib_1.__importDefault)(require('express'));
const serverless_http_1 = (0, tslib_1.__importDefault)(require('serverless-http'));
const path_1 = (0, tslib_1.__importDefault)(require('path'));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require('cookie-parser'));
const morgan_1 = (0, tslib_1.__importDefault)(require('morgan'));
const routesIndex_1 = (0, tslib_1.__importDefault)(require('./routesIndex'));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
app.set('public_html', path_1.default.resolve(__dirname, '../../../public/'));
app.set('views', path_1.default.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');
// Add middleware libraries.
app.use((0, morgan_1.default)('dev'));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({extended: false}));
// using the JSON body parser
app.use(require('body-parser').json());
// One main middleware for / using express.static and res.render.
// app.use(
//  '/',
// Use express.static first to look for a static resource.
//  express.static(app.get('public_html'))
// );
// General
app.use('/', routesIndex_1.default),
  //      app.use('/', blogsRouter);
  //      app.use('/', usersRouter);
  // Catch 404  and forward to error handler
  app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
  });
// Error handling
app.use(function (err, req, res, next) {
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
module.exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=server.js.map

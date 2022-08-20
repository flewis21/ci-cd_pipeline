'use strict';
const tslib_1 = require('tslib');
const express_1 = (0, tslib_1.__importDefault)(require('express'));
const dotenv_1 = (0, tslib_1.__importDefault)(require('dotenv'));
// import path from 'path';
dotenv_1.default.config();
// const app = express();
const usersRouter = express_1.default.Router();
// If not found render main index, but only for / else next.
// app.set('views', path.resolve(__dirname, '../../../views/pages/'));
/** GET users listing. */
// express.static('public_html'),
exports.list = function (req, res, next) {
  //  if (req.url === '/Home') {
  res.status(200).render(process.env.WEBSITE_1 || 'realwebsite', {
    title: 'Users!',
    s_type_1: 'text/javascript',
    script_1: 'output/index',
    c_type_1: 'text/css',
    css_1: 'css/style.css',
    desc_1: 'Error',
    author_1: 'Page',
    keywords_1: 'error',
  });
};
module.exports = usersRouter;
//# sourceMappingURL=routesUsers.js.map

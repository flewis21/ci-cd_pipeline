'use strict';
const tslib_1 = require('tslib');
const express_1 = (0, tslib_1.__importDefault)(require('express'));
const dotenv_1 = (0, tslib_1.__importDefault)(require('dotenv'));
const path_1 = (0, tslib_1.__importDefault)(require('path'));
dotenv_1.default.config();
const app = (0, express_1.default)();
const indexRouter = express_1.default.Router();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
// If not found render main index, but only for / else next.
app.set('public_html', path_1.default.resolve(__dirname, '../../../public/'));
app.set('views', path_1.default.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');
/** GET users listing. */
express_1.default.static('public_html'),
  indexRouter.use('/Home', function (req, res, next) {
    //  if (req.url === '/Home') {
    res.status(200).render(process.env.WEBSITE_1 || 'index', {
      title: 'Home!',
      s_type_1: 'text/javascript',
      script_1: 'output/index',
      c_type_1: 'text/css',
      css_1: 'css/style.css',
      desc_1: '',
      author_1: '',
      keywords_1: '',
      imageAuthor_1: 'images/virgo.jpg',
      imagePage_1: 'images/uh1.png',
    });
    //  }
  });
// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});
module.exports = indexRouter;
//# sourceMappingURL=routesIndex.js.map

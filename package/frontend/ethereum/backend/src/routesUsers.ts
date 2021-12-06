import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const app = express();
const usersRouter = express.Router();

// If not found render main index, but only for / else next.
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
/** GET users listing. */
// express.static('public_html'),
app.use('/Users', function (req: any, res: any, next: any) {
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
  //    }
});

export = usersRouter;

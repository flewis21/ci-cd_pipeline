import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const app = express();
const indexRouter = express.Router();

// If not found render main index, but only for / else next.
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
/** GET users listing. */
// express.static('public_html'),
app.use('/Home', function (req: any, res: any, next: any) {
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

export = indexRouter;

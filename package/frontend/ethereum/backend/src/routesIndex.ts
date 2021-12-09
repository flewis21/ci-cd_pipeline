import express, {Router} from 'express';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const app = express();
const indexRouter = express.Router();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;

// If not found render main index, but only for / else next.
app.set('public_html', path.resolve(__dirname, '../../../public/'));
app.set('views', path.resolve(__dirname, '../../../views/pages/'));
app.set('view engine', 'ejs');
/** GET users listing. */
express.static('public_html'),
  indexRouter.use('/Home', function (req: any, res: any, next: any) {
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

export = indexRouter;

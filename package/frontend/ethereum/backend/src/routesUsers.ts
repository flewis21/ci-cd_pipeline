import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const usersRouter = express.Router();

// If not found render main index, but only for / else next.

/** GET users listing. */
express.static('public_html'),
  usersRouter.get('/', function (req: any, res: any, next: any) {
    if (req.url === '/') {
      res.status(200).render(process.env.WEBSITE_1 || 'realWebsite', {
        title: 'Users!',
        s_type_1: 'text/javascript',
        script_1: 'output/index',
        c_type_1: 'text/css',
        css_1: 'css/style.css',
        desc_1: 'Error',
        author_1: 'Page',
        keywords_1: 'error',
      });
    }
  });

export = usersRouter;

import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

// If not found render main index, but only for / else next.

/** GET users listing. */
router.get('/', function (req: any, res: any, next: any) {
  if (req.url === '/') {
    express.static('public_html'),
      res.status(200).render(process.env.WEBSITE_1 || 'first', {
        title: 'BLOG!',
        s_type_1: '??',
        script_1: '??',
        c_type_1: 'text/css',
        css_1: '1972/09/11/css/style.css',
        desc_1: 'Error',
        author_1: 'Page',
        keywords_1: 'error',
      });
  }
});

module.exports = router;

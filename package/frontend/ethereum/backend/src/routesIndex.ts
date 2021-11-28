import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

// If not found render main index, but only for / else next.

/** GET users listing. */
// express.static('public_html'),
router.get('/', function (req: any, res: any, next: any) {
  if (req.url === '/') {
    res.status(200).render(process.env.WEBSITE_1 || 'index', {
      title: '',
      s_type_1: 'text/javascript',
      script_1: '1972/09/11/output/index',
      c_type_1: 'text/css',
      css_1: 'css/style.css',
      desc_1: '',
      author_1: '',
      keywords_1: '',
      imageAuthor_1: '/1972/09/11/images/virgo.jpg',
      imagePage_1: '/1972/09/11/images/uh1.png',
    });
  }
});

module.exports = router;

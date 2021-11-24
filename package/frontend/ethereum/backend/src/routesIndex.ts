import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

/** GET users listing. */
router.get('/', function (req: any, res: any, next: any) {
  if (req.url === '/') {
    express.static('public_html'),
      res.status(200).render(process.env.WEBSITE_1 || 'index', {
        title: '',
        s_type_1: '',
        script_1: '',
        c_type_1: '',
        css_1: '',
        desc_1: '',
        author_1: '',
        keywords_1: '',
      });
  }
}),
  (module.exports = router);

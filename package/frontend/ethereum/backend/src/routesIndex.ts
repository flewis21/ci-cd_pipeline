import express from 'express';
const router = express.Router();

/** GET users listing. */
router.get('/', function (req, res, next) {
  res.render(process.env.WEBSITE_3 || 'index', {title: 'respond with a resource'});
});

module.exports = router;

import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const router = express.Router();

/** GET users listing. */
router.get('/', function (req, res, next) {
  res.render(process.env.WEBSITE_3 || 'index', {title: 'respond with a resource'});
});

module.exports = new Router;

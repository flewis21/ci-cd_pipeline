import express from 'express';
const router = express.Router();

// Require controller modules.
let genre_controller = require('./genreController');

// Page routes.

// GET requests fro Blog
router.get('/BLOG', genre_controller);

module.exports = router;

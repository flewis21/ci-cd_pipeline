import express from 'express';

const router = express.Router();

// Require controller modules.
import genre_controller from '../../public/output/genreController';

// Page routes.

// GET requests fro Blog
router.get('/BLOG', genre_controller.blog);

module.exports = router;

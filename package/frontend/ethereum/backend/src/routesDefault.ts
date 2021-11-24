import express from 'express';
const router = express.Router();
const app = express();

// Use express.static first to look for a static resource.
express.static(app.get('public_html'));

module.exports = router;

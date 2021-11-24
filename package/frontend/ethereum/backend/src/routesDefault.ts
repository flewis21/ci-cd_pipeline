import express from 'express';
const router = express.Router();

// Use express.static first to look for a static resource.
express.static(router.get('public_html'));

module.exports = router;

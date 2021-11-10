'use strict';
exports.__esModule = true;
var tslib_1 = require('tslib');
var ejs_1 = (0, tslib_1.__importDefault)(require('ejs'));
// the renderFile method in action.
ejs_1['default'].renderFile(
  // first I give it a path to an *.ejs file.
  '../frontend/views/pages/first.ejs',
  // Some data to use when rendering.
  {
    layout: '../frontend/views/pages/_base-layout.ejs',
    title: 'reading a file from ejs!',
    numbers: [7, 8, 9],
  },
  // Callback with html, or an error.
  function (err, html) {
    if (err != null) {
      // reject if an error happens.
      console.log(err);
    }
    // Resolve with  the  html.
    console.log(html);
  }
);

'use strict';
exports.__esModule = true;
var tslib_1 = require('tslib');
var ejs_1 = (0, tslib_1.__importDefault)(require('ejs'));
var html = ejs_1['default'].render('<p> hello <%= name %> </p>', {name: 'ejs'});
console.log(html); // <p> hello ejs </p>

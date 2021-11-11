'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var ejs_1 = __importDefault(require('ejs'));
var html = ejs_1['default'].render('<p> hello <%= name %> </p>', {name: 'ejs'});
console.log(html); // <p> hello ejs </p>

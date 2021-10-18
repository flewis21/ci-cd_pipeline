"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express1 = __importDefault(require("express"));
const serverless_http1 = __importDefault(require("serverless-http"));
const path1 = __importDefault(require("path"));
const app = (0, express1.default)();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
app.set('views', path1.default.resolve(__dirname, '../views/pages/'));
app.set('view engine', 'ejs');
app.get('/1972/09/11', (req, res, next) => {
    res.status(200).render('index');
});
// Server
app.listen(port, () => {
    console.log('Listening on:', baseUrl);
});
module.exports.handler = (0, serverless_http1.default)(app);

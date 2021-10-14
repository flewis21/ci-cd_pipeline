"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;
app.get('/1972/09/11', (req, res) => {
    res.status(200).send('Hello world!');
});
// Server
app.listen(port, () => {
    console.log('Listening on:', baseUrl);
});

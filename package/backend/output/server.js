"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var serverless_http_1 = __importDefault(require("serverless-http"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1["default"])();
var port = process.env.PORT || 4000;
var baseUrl = "http://localhost:" + port;
app.set('public_html', path_1["default"].resolve(__dirname, '../../frontend/public/'));
app.set('views', path_1["default"].resolve(__dirname, '../../frontend/views/pages/'));
app.set('view engine', 'ejs');
// One main middleware for / using express.static and res.render.
app.use('/1972/09/11', [
    // Use express.static first to look for a static resource.
    express_1["default"].static(app.get('public_html')),
    // If not found render main index, but only for / else next.
    // express.static('public_html'),
    function (req, res, next) {
        if (req.url === '/') {
            express_1["default"].static('public_html'),
                res.status(200).render('index', {
                    title: 'My Family Tree - Part I',
                    editor: 'Pro Bono Volunteer Agency',
                    short_description: 'Pro Bono Volunteer Agency',
                    sipoc_form: 'https://docs.google.com/forms/d/e/1FAIpQLSf7eQty92OWCEw_YZ4Irf-PpjYboaKysgVLIBnxESn-TcRfnQ/viewform?embedded=true',
                    sipoc_slide: 'https://docs.google.com/presentation/d/e/2PACX-1vSq6HBWVkXDbQatjrtodxKlGSDJkrj0Uc70jRN6vhzDmvW3RPjysRGhnjCyGZ77vaKLl0IVqB3UDQO3/embed?start=false&loop=false&delayms=60000',
                    myScript: 'output/index.js',
                    myCss: 'css/style.css',
                    css_type: 'text/css',
                    script_type: 'module'
                });
        }
    },
]);
app.get('*', function (req, res) {
    res.status(404).render('error', {});
});
// Server
app.listen(port, function () {
    console.log('Listening on:', baseUrl);
});
module.exports.handler = (0, serverless_http_1["default"])(app);

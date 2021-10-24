import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://localhost:${port}`;

app.set('views', path.resolve(__dirname, '../views/pages/'));
app.set('view engine', 'ejs');
app.get('/1972/09/11', (req, res, next) => {
  res.status(200).render('index');
});

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl);
});

module.exports.handler = serverless(app);

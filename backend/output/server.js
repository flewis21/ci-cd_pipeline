'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express1 = __importDefault(require('express'))
const path1 = __importDefault(require('path'))
const app = (0, express1.default)()
const port = process.env.PORT || 4000
const baseUrl = `http://localhost:${port}`
app.set('views', path1.default.join(__dirname, '../views/ '))
app.set('view engine', 'ejs')
app.get('/1972/09/11', (req, res) => {
  res.status(200).render('pages/index')
})
// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl)
})

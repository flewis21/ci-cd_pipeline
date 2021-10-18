import express from 'express'
import path from 'path'
const app = express()
const port = process.env.PORT || 4000
const baseUrl = `http://localhost:${port}`

app.set('views', path.join(__dirname +'../views '))
app.set('view engine', 'ejs')
app.get('/1972/09/11', (req, res) => {
  res.status(200).render('/pages/index')
})

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl)
})

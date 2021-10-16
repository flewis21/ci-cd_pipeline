import express from 'express'
const app = express()
const port = process.env.PORT || 4000
const baseUrl = `http://localhost:${port}`

app.get('/1972/09/11', (req, res) => {
  res.status(200).send('Hello world!')
})

// Server
app.listen(port, () => {
  console.log('Listening on:', baseUrl)
})
